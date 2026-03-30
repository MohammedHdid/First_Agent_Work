import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unicorn Waitlist - High-End AI SaaS",
  description: "Join the vanguard of the next generation AI SaaS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
