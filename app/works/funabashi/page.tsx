"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/funabashi-living-room-blue-accent.jpg",
  "/funabashi-thermal-sash-window.jpg",
  "/funabashi-renovated-tatami-room.jpg",
  "/funabashi-kitchen-renovation.jpg",
  "/funabashi-exterior-kominka.jpg",
]

export default function FunabashiProjectPage() {
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
              <span>船橋</span>
            </div>

            {/* Tag */}
            <div className="mb-4">
              <span className="inline-block px-4 py-1 border border-primary-foreground/50 text-primary-foreground text-sm">
                木造戸建て
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground leading-relaxed">
              【古民家リノベーション】
              <br />
              暮らしのステージが変わった、これからの住まい
            </h1>
            <p className="text-primary-foreground/70 mt-2">船橋・千葉県船橋市</p>
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
                  子どもたちが独立し、 夫婦二人で過ごす時間が増えたことをきっかけに行われた古民家リノベーションです。
                </p>
                <p>
                  寒く、暗い印象が拭えなかった築年数のある住まい。 特に古民家特有の広縁から入り込む冷気は、
                  「冬の底冷えがとにかくつらい」 という長年の悩みでもありました。
                </p>
                <p>
                  そこで今回は、 和室と広縁の間に断熱サッシを新設するという対策を採用。
                  「室内にサッシが立つ」という少し勇気のいる選択でしたが、 実際には意外なほど違和感もなく、
                  それ以上に、底冷えから解放された快適さを喜んでいただける結果となりました。
                </p>
                <p>
                  室内は、工事前を想像できなくなるほど明るい空間へと一新。
                  思い切って採り入れたブルーのアクセントクロスが、
                  今では家族の笑顔が自然と集まる象徴的な存在になっています。
                </p>
                <p>これからの暮らしに寄り添いながら、 住まいが再び、心からくつろげる場所へと生まれ変わりました。</p>
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
