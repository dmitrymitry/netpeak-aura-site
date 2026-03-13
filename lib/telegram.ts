export interface LeadData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message?: string;
}

export async function sendTelegramLead(lead: LeadData): Promise<void> {
  const token = process.env.TG_TOKEN;
  const chatId = process.env.TG_CHAT_ID;

  if (!token || !chatId) {
    console.warn("Telegram credentials not configured");
    return;
  }

  const timestamp = new Date().toLocaleString("uk-UA", {
    timeZone: "Europe/Kyiv",
    dateStyle: "short",
    timeStyle: "short",
  });

  const text = [
    "🚀 *New Aura Lead*",
    "",
    `👤 *Name:* ${lead.name}`,
    `🏢 *Company:* ${lead.company}`,
    `📧 *Email:* ${lead.email}`,
    lead.phone ? `📱 *Phone:* ${lead.phone}` : null,
    lead.message ? `💬 *Message:* ${lead.message}` : null,
    "",
    `🕐 *Time:* ${timestamp}`,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    console.error("Telegram send error:", err);
  }
}
