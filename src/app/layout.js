import { Geist, Geist_Mono } from "next/font/google";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sharma Properties",
  description:
    "Buy, sell, or rent verified properties in Delhi, Noida, Gurugram and NCR with Sharma Properties. Trusted platform for homes and commercial spaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
