import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ECLIPSE — The Darkness Will Rise",
  description:
    "When a solar anomaly plunges Earth into eternal twilight, scientists discover the true threat isn't the dying sun — it's what emerges from the shadows.",
  openGraph: {
    title: "ECLIPSE — The Darkness Will Rise",
    description:
      "An award-winning sci-fi thriller series. All three seasons streaming now.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECLIPSE — The Darkness Will Rise",
    description:
      "An award-winning sci-fi thriller series. All three seasons streaming now.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
