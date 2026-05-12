import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

// הגדרת הפונט עם המשקלים הנפוצים ותמיכה בעברית
const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo", // משתנה CSS לשימוש ב-Tailwind
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "האפליקציה שלי",
  description: "נבנה עם Next.js ופונט Heebo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className={`${heebo.className} min-h-screen bg-white antialiased`}>
        {/* כאן תוכל להוסיף Navbar קבוע */}
        <header className="p-4 border-b">
          <nav className="max-w-7xl mx-auto font-bold text-xl">
            לוגו האפליקציה
          </nav>
        </header>

        <main>{children}</main>

        <footer className="p-4 border-t text-center text-sm text-gray-500">
          © 2026 כל הזכויות שמורות
        </footer>
      </body>
    </html>
  );
}