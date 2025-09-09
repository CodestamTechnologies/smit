import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TANYA SMIT |  Gaming ",
  description:
    "Level up with TANYA SMIT – your ultimate destination for immersive gaming. Explore next-gen titles, cutting-edge graphics, pro tips, and a premium gaming experience like never before.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}