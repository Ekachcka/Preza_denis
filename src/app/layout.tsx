import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Денис Булах — гітарист, аранжувальник, звукозапис",
  description: "Портфоліо Дениса Булаха: гітарист, аранжувальник, звукозапис.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className={`${montserrat.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
