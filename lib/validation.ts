export interface FormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message?: string;
  honeypot?: string; // anti-spam
}

export interface ValidationError {
  field: string;
  message: string;
}

export function validateLead(data: FormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.name?.trim()) errors.push({ field: "name", message: "Name is required" });
  if (!data.company?.trim()) errors.push({ field: "company", message: "Company is required" });
  if (!data.email?.trim()) {
    errors.push({ field: "email", message: "Email is required" });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push({ field: "email", message: "Invalid email" });
  }

  return errors;
}
