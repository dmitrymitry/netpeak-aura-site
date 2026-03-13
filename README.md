# Netpeak Aura — Landing Page

Двомовний SaaS-лендинг для AI-платформи Netpeak Aura.

## Стек

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Telegram Bot API** — сповіщення про нові ліди

## Запуск

```bash
npm install
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000)

## Налаштування Telegram

1. Відкрийте [@BotFather](https://t.me/BotFather) у Telegram
2. Надішліть `/newbot` — отримайте `BOT_TOKEN`
3. Напишіть [@userinfobot](https://t.me/userinfobot) — отримайте `CHAT_ID`
4. Заповніть `.env.local`:

```env
TG_TOKEN=ваш_токен
TG_CHAT_ID=ваш_chat_id
```

## Структура

```
/app
  page.tsx          — головна сторінка (locale switcher)
  layout.tsx        — мета-теги
  /api/lead         — endpoint для форми
/components
  Navbar.tsx
  Hero.tsx
  Problem.tsx
  Solution.tsx
  Risks.tsx
  Features.tsx
  NPS.tsx
  Case.tsx
  Roadmap.tsx
  CTA.tsx           — секція з формою
  LeadForm.tsx      — форма з валідацією
  Footer.tsx
/lib
  i18n.ts           — утиліта перекладів
  telegram.ts       — відправка лідів у Telegram
  validation.ts     — валідація форми
  rateLimit.ts      — захист від спаму
/i18n
  ua.json           — українські тексти
  en.json           — англійські тексти
```

## Деплой

```bash
npm run build
npm start
```

Або деплой на Vercel: додайте ENV змінні у Settings → Environment Variables.
