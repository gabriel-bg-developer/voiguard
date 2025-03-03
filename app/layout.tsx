import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VoiGuard - The new era of secure callin",
  description: "VoiGuard ttransforms every call into a safe, clear and risk-free experience.",
  generator: "v0.dev",
  icons: [
    { rel: "icon", url: "/favicon.png" }, // Favicon por defecto en formato .png
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}