import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProviderTheme from "@/components/provider/ThemeProvider";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mukti portofolio",
  description: "this is my website portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <ProviderTheme>{children}</ProviderTheme>
      </body>
    </html>
  );
}
