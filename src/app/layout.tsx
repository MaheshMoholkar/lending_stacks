"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const styles =
    pathname === "/"
      ? "bg-gradient-to-r from-black from-0% to-secondary to-95%"
      : "bg-slate-950";

  return (
    <html>
      <body className="flex flex-col min-h-screen">
        <Header styles={styles} />
        <main className="flex-grow">{children}</main>
        <Footer styles={styles} />
      </body>
    </html>
  );
}
