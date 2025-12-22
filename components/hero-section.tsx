"use client"
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const images = [
    {
      src: "/japanese-living-room-with-river-view.jpg",
      alt: "伊豆の川を眺めるリビングルーム",
    },
    {
      src: "/traditional-japanese-farmhouse-exterior-with-natur.jpg",
      alt: "勝浦の古民家外観",
    },
    {
      src: "/stylish-hotel-room-with-warm-lighting.jpg",
      alt: "葛西のモダンな宿泊施設",
    },
    {
      src: "/funabashi-living-room-blue-accent.jpg",
      alt: "船橋のブルーアクセントクロスのリビング",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length)
        setIsTransitioning(false)
      }, 600)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  const scrollToPhilosophy = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="w-full h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-10 bg-[#234a69]/30"></div>
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(135deg, rgba(35, 74, 105, 0.4) 0%, transparent 50%, rgba(0, 0, 0, 0.2) 100%)",
        }}
      ></div>
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 40%, transparent 70%)",
        }}
      ></div>

      <img
        src={images[currentImage].src || "/placeholder.svg"}
        alt={images[currentImage].alt}
        className="w-full h-full object-cover object-center transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
        style={{ opacity: isTransitioning ? 0 : 1 }}
      />

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center max-w-5xl px-6">
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.3] tracking-wider"
            style={{ textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)" }}
          >
            {/* PC表示 */}
            <span className="hidden sm:inline">
              空き家を、街を、
              <br />
              暮らしを、つくりかえる
            </span>
            {/* スマホ表示: 3行改行 */}
            <span className="sm:hidden">
              空き家を、街を、
              <br />
              暮らしを、
              <br />
              つくりかえる
            </span>
          </h1>
          <div className="mt-8 md:mt-12">
            <p
              className="hidden sm:block text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 tracking-[0.2em] font-light"
              style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.4)" }}
            >
              民泊・商業施設のコンバージョン、住宅リノベーション
            </p>
            {/* スマホ表示: 2行に分け、─を削除 */}
            <div
              className="sm:hidden text-base text-white/90 tracking-[0.2em] font-light flex flex-col items-center gap-1"
              style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.4)" }}
            >
              <span>民泊・商業施設のコンバージョン</span>
              <span>住宅リノベーション</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-0 right-0 z-20 px-8 md:px-16 lg:px-24">
        <div className="w-full h-[2px] bg-white/20 relative">
          <div
            className="absolute top-0 left-0 h-full bg-white transition-all duration-500 ease-out"
            style={{
              width: `${100 / images.length}%`,
              transform: `translateX(${currentImage * 100}%)`,
            }}
          />
        </div>
      </div>

      <button
        onClick={scrollToPhilosophy}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="下にスクロール"
      >
        <ChevronDown size={36} strokeWidth={1.5} />
      </button>
    </section>
  )
}
