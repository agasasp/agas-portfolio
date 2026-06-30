import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agas Putra | Quality Assurance Engineer",
  description:
    "Portfolio Agas Putra - Quality Assurance Engineer yang berpengalaman dalam Manual Testing, Automation Testing, API Testing menggunakan Playwright, TypeScript, dan Postman.",

  keywords: [
    "QA Engineer",
    "Automation Testing",
    "Playwright",
    "Manual Testing",
    "API Testing",
    "TypeScript",
  ],

  authors: [
    {
      name: "Agas Putra",
    },
  ],

  creator: "Agas Putra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}