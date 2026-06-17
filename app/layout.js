import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorCircle from "@/components/CursorCircle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vaibhavi Bachu | AI/ML Engineer",
  description:
    "Portfolio of Vaibhavi Bachu, an AI/ML Engineer specializing in predictive maintenance, data cleaning, and recommendation systems.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CursorCircle />
        {children}
      </body>
    </html>
  );
}
