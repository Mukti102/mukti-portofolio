import { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baca Quran Online",
  description:
    "Jangan lupa tadarus di sini! Baca quran online, buat gadget anda lebih berfaedah!",
};

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return <div className={inter.className}>{children}</div>;
}
