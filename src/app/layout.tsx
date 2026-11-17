import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { FocusHighlight } from "@/components/dev/FocusHighlight";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ЗАПИС ГІТАРНИХ ПАРТІЙ І АРАНЖУВАННЯ ВАШИХ ТРЕКІВ",
  description: "Портфоліо Дениса Булаха: гітарист, аранжувальник, звукозапис.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className={`${montserrat.variable} antialiased`}>
      <body className="min-h-screen">
        {children}
        <FocusHighlight />
      </body>
    </html>
  );
}
