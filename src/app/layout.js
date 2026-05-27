import { Geist, Geist_Mono } from "next/font/google";
import TopNav from "./ui/TopNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "South Loop Urbanists",
  description: "A neighborhood group focused on building a more liveable South Loop",
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="en" className="min-h-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#f7fbff] text-[#1c2b2d]`}
      >
        <TopNav/>

        <main className="bg-[#f7fbff] text-[#1c2b2d]">{children}</main>
      </body>
    </html>
  );
}
