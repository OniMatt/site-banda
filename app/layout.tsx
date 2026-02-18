import type { Metadata } from "next";
import { Baloo_2, Montserrat } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baloo.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Beware The Dogs",
  description: "A Melhor Banda do Mundo",
};
