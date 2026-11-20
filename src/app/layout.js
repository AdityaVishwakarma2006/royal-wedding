import WeddingFrame from "@/components/WeddingFrame/WeddingFrame";
import {
  Tiro_Devanagari_Hindi,
  Mukta,
  Cormorant_Garamond,
  Lato,
} from "next/font/google";

import "./globals.css";

const tiro = Tiro_Devanagari_Hindi({
  weight: "400",
  subsets: ["devanagari", "latin"],
  variable: "--font-tiro",
});

const mukta = Mukta({
  weight: ["400", "500", "600", "700"],
  subsets: ["devanagari", "latin"],
  variable: "--font-mukta",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Aman & Prachi | A Royal Celebration",
  description:
    "अमन एवं प्राची के शुभ विवाह में सपरिवार सादर आमंत्रित। 5–6 दिसंबर 2026।",
  openGraph: {
    title: "Aman & Prachi — Wedding Invitation",
    description: "Join us in celebrating love and togetherness.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body
  className={`${tiro.variable} ${mukta.variable} ${cormorant.variable} ${lato.variable}`}
>
  <WeddingFrame />
  {children}
</body>
    </html>
  );
}
