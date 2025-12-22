import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"

const udReimin = Noto_Serif_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ud-reimin",
  weight: ["400", "500", "600", "700"],
})

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "株式会社ツクリカエ | 空き家を、街を、暮らしを、つくりかえる",
  description:
    "空き家の再生から住宅リノベーションまで。民泊・商業施設のリノベーション、住宅リノベーションを手がける設計・施工チーム。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${udReimin.variable} ${notoSansJP.variable} antialiased`}>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
