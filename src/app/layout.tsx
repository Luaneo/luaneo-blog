import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luaneo Blog",
  description: "A blog dedicated to shitposting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
