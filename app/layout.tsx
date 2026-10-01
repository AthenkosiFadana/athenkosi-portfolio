import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Athenkosi Fadana | Computer Science Graduate",
  description: "Portfolio of Athenkosi Fadana — software development, IT support, cloud and cybersecurity.",
  metadataBase: new URL("https://athenkosi-fadana.vercel.app")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}