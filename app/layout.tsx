import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netpeak Aura — AI система контролю клієнтських комунікацій",
  description:
    "Netpeak Aura автоматично аналізує клієнтські чати та виявляє тактичні і стратегічні ризики у роботі команд.",
  keywords: [
    "аналіз клієнтських комунікацій",
    "AI для сервісних компаній",
    "контроль клієнтських чатів",
    "client communication analytics",
    "AI customer success platform",
    "client communication monitoring",
  ],
  openGraph: {
    title: "Netpeak Aura — AI система контролю клієнтських комунікацій",
    description:
      "AI-платформа, яка виявляє ризики у клієнтських комунікаціях до того, як вони стають проблемою.",
    type: "website",
    locale: "uk_UA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
