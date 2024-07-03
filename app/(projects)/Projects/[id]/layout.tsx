import { Metadata } from "next";
import React from "react";
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
  return <>{children}</>;
}
