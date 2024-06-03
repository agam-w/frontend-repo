import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import classNames from "classnames";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User Data App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(roboto.className)}>{children}</body>
    </html>
  );
}
