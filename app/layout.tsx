import type { Metadata } from "next";
import { Baloo_2, Montserrat } from "next/font/google";
import "./globals.css";

// Domínio de produção. As prévias de link (WhatsApp, Instagram) montam as
// URLs absolutas a partir daqui.
const SITE_URL = "https://www.bewarethedogs.com";

const DESCRICAO = "Rock alternativo de Montenegro/RS. A melhor banda do mundo.";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baloo",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Beware The Dogs",
  description: DESCRICAO,
  openGraph: {
    title: "Beware The Dogs",
    description: DESCRICAO,
    url: SITE_URL,
    siteName: "Beware The Dogs",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beware The Dogs",
    description: DESCRICAO,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${baloo.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
