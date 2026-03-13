import { NextRequest, NextResponse } from "next/server";
import { sendTelegramLead } from "@/lib/telegram";
import { validateLead, type FormData } from "@/lib/validation";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: FormData;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot check
  if (body.honeypot) {
    return NextResponse.json({ status: "ok" }); // silently discard bots
  }

  // Validation
  const errors = validateLead(body);
  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // Send to Telegram
  try {
    await sendTelegramLead({
      name: body.name.trim(),
      company: body.company.trim(),
      email: body.email.trim(),
      phone: body.phone?.trim(),
      message: body.message?.trim(),
    });
  } catch (err) {
    console.error("Failed to send Telegram notification:", err);
    // Don't fail the request if Telegram fails
  }

  return NextResponse.json({ status: "ok" });
}
