"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/japanese-traditional-house-interior-with-tatami-an.jpg",
  "/renovated-japanese-kitchen-with-indirect-lighting.jpg",
  "/japanese-house-entrance-with-vintage-sliding-doors.jpg",
  "/japanese-living-room-with-river-view.jpg",
  "/modern-japanese-bathroom-with-natural-materials.jpg",
]

export default function IzuProjectPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(27,56,77)]">
      <Header />
      <main className="flex-1">
        {/* Header Section */}
        <section className="relative pt-28 sm:pt-36 pb-6 sm:pb-8">
          <div className="container mx-auto px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-6">
              <Link href="/" className="hover:text-primary-foreground transition-colors">
                HOME
              </Link>
              <span>/</span>
              <Link href="/works" className="hover:text-primary-foreground transition-colors">
                施工事例
              </Link>
              <span>/</span>
              <span>伊豆</span>
            </div>

            {/* Tag */}
            <div className="mb-4 flex gap-2">
              <span className="inline-block px-4 py-1 border border-primary-foreground/50 text-primary-foreground text-sm">
                民泊
              </span>
              <span className="inline-block px-4 py-1 border border-primary-foreground/50 text-primary-foreground text-sm">
                木造戸建て
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground leading-relaxed">
              【戸建てリノベーション｜民泊対応】
              <br />
              自然と暮らし、そして滞在をつなぐ住まい
            </h1>
            <p className="text-primary-foreground/70 mt-2">伊豆・静岡県賀茂郡</p>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="pb-8">
          <div className="container mx-auto px-6">
            {/* Main Image with Navigation */}
            <div className="relative">
              <div className="relative aspect-[3/2] sm:aspect-[16/9] overflow-hidden">
                <Image
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`施工事例画像 ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition-colors"
                aria-label="前の画像"
              >
                <ChevronLeft className="w-10 h-10 sm:w-14 sm:h-14" strokeWidth={1} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition-colors"
                aria-label="次の画像"
              >
                <ChevronRight className="w-10 h-10 sm:w-14 sm:h-14" strokeWidth={1} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 sm:gap-4 mt-4 overflow-x-auto py-2 px-1">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative flex-shrink-0 w-24 sm:w-32 lg:w-40 aspect-[4/3] overflow-hidden transition-opacity ${
                    currentImageIndex === index ? "opacity-100 ring-2 ring-white" : "opacity-60 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`サムネイル ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-[rgb(35,60,80)] p-8 sm:p-12">
              <div className="text-primary-foreground/90 leading-[2.2] text-sm sm:text-base space-y-6">
                <p>
                  伊豆の豊かな自然に囲まれた一軒家を、
                  将来は民泊事業としての活用も見据えた住まいへとリノベーションしたプロジェクトです。
                </p>
                <p>
                  目の前には川が流れ、日常の中に非日常が溶け込むロケーションが、この建物の大きな魅力でした。既存の間取りでは、玄関を入るとすぐに居室が広がる構成でしたが、
                  「住まいとしての落ち着きと、宿としての切り替えをつくる」
                  というテーマから、玄関とLDKの間に古建具を再利用して緩やかな境界を設けました。
                </p>
                <p>
                  広い玄関ホールの先には、 間接照明が印象的なキッチンが正面に立ち上がり、
                  訪れた瞬間から空間の奥行きとやわらかな光を感じられる構成としています。
                </p>
                <p>
                  カラーコーディネートと照明計画で上質な雰囲気を演出しながらも、
                  システムキッチンやサニタリールームまわりは、
                  「既製品を組み合わせてコストを抑えつつ、機能性も確保する」 という現実的なバランスを丁寧に整えました。
                </p>
                <p>
                  自然の中で暮らす住まいとしても、 人を迎え入れる滞在の場としても、
                  どちらの未来にも開かれた一軒家が完成しました。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Works Link */}
        <section className="pb-16">
          <div className="container mx-auto px-6 text-center">
            <Link
              href="/works"
              className="inline-block px-8 py-3 border border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              施工事例一覧へ戻る
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
