"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function ServicesSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const totalPages = 4
  const containerHeightMultiplier = 5

  const businessAreas = [
    {
      title: "空き家活用支援事業",
      services: [
        "空き家の現地調査・活用提案",
        "民泊施設へのリノベーション設計・施工",
        "商業施設（飲食店等）へのコンバージョン（用途変更を含む改修）",
        "役所・行政との調整支援（申請や用途変更のアドバイス）",
      ],
      image: "/minimalist-japanese-bedroom-with-tatami.jpg",
      position: "left",
    },
    {
      title: "企画・設計・デザイン",
      services: [
        "住宅・店舗の設計プランニング",
        "インテリアコーディネート提案（素材選定・色彩計画など）",
        "デザイン監修と現場への反映",
      ],
      image: "/renovated-japanese-kitchen-with-indirect-lighting.jpg",
      position: "right",
    },
    {
      title: "住宅リノベーション事業",
      services: [
        "住宅の部分リノベーション（浴室・トイレ・洗面・キッチンなど）",
        "内装工事（壁紙・床・建具の交換など）",
        "間取り変更や構造に関わる大規模改修",
      ],
      image: "/funabashi-living-room-blue-accent.jpg",
      position: "left",
    },
  ]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const containerTop = -rect.top
      const pageHeight = window.innerHeight - 80

      const rawPage = containerTop / pageHeight
      const page = Math.min(totalPages - 1, Math.max(0, Math.floor(rawPage + 0.5)))

      setCurrentPage(page)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [totalPages])

  const sectionHeight = `calc((100vh - 80px) * ${containerHeightMultiplier})`

  return (
    <div ref={containerRef} id="services" className="relative" style={{ height: sectionHeight }}>
      <div className="sticky top-[80px] h-[calc(100vh-80px)] overflow-hidden">
        {/* インジケーター */}
        <div className="absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
          <div className="h-[60vh] w-[2px] bg-white/20 relative">
            <div
              className="absolute top-0 left-0 w-full bg-white transition-all duration-700 ease-out"
              style={{
                height: `${100 / totalPages}%`,
                transform: `translateY(${currentPage * 100}%)`,
              }}
            />
          </div>
        </div>

        {/* ページ0: 会社紹介 */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            currentPage === 0 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src="/design-consultation.jpg"
              alt="企画・設計・デザインの打ち合わせ風景"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#3d4f5f]/70"></div>
          </div>

          <div className="relative z-10 h-full">
            {/* デスクトップレイアウト */}
            <div className="hidden lg:flex h-full items-center justify-center max-w-6xl mx-auto px-8">
              <div className="flex flex-col justify-start">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed font-serif my-4">
                  株式会社ツクリカエは、
                </p>
                <p className="text-base sm:text-lg text-white/90 leading-[2.2]">
                  空き家の再生から住宅リノベーションまで、柔軟に対応する設計・施工チームです。
                </p>
                <br />
                <p className="font-bold text-lg sm:text-xl font-serif text-white leading-relaxed">私たちの仕事は、</p>
                <p className="text-base sm:text-lg text-white/90 leading-[2.2]">
                  リノベーションの設計や施工だけでなく、行政書士や運営会社など専門家との
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed font-serif my-4">
                  「間に立って調整し、つなげる」
                </p>
                <p className="text-base sm:text-lg text-white/90 leading-[2.2]">ことです。</p>
                <br />
                <p className="font-bold text-lg sm:text-xl font-serif text-white leading-relaxed">私たちの使命は、</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed font-serif my-4">
                  「想いのある場所を、次の誰かにつなげる」
                </p>
                <p className="text-base sm:text-lg text-white/90 leading-[2.2]">ことです。</p>
                <br />
                <p className="text-base sm:text-lg text-white/90 leading-[2.2]">
                  長年にわたり暮らしや営みを支えてきた建物に刻まれたそれぞれの歴史と記憶を、
                  <br />
                  現場目線の提案と丁寧な仕事で再び人々の居場所となるよう、
                  <br />
                  一つひとつのプロジェクトに向き合っています。
                </p>
              </div>
            </div>

            {/* モバイルレイアウト */}
            <div className="lg:hidden flex flex-col px-8 sm:px-12 py-8 h-full overflow-y-auto">
              <div className="text-left my-auto">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed font-serif my-4">
                  株式会社ツクリカエは、
                </p>
                <p className="text-base sm:text-lg text-white/90 leading-[2.2]">
                  空き家の再生から住宅リノベーションまで、
                  <br />
                  柔軟に対応する設計・施工チームです。
                </p>
                <br />
                <p className="font-bold text-lg sm:text-xl font-serif text-white leading-relaxed">私たちの仕事は、</p>
                <p className="text-base sm:text-lg text-white/90 leading-[2.2]">
                  リノベーションの設計や施工だけでなく、
                  <br />
                  行政書士や運営会社など専門家との
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed font-serif my-4">
                  「間に立って調整し、つなげる」
                </p>
                <p className="text-base sm:text-lg text-white/90 leading-[2.2]">ことです。</p>
                <br />
                <p className="font-bold text-lg sm:text-xl font-serif text-white leading-relaxed">私たちの使命は、</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed font-serif my-4">
                  「想いのある場所を、
                  <br className="sm:hidden" />
                  <span className="pl-[1em] sm:pl-0 inline-block">次の誰かにつなげる」</span>
                </p>
                <p className="text-base sm:text-lg text-white/90 leading-[2.2]">ことです。</p>
                <br />
                <p className="text-base sm:text-lg text-white/90 leading-[2.2]">
                  長年にわたり暮らしや営みを支えてきた建物に刻まれたそれぞれの歴史と記憶を、
                  <br />
                  現場目線の提案と丁寧な仕事で再び人々の居場所となるよう、
                  <br />
                  一つひとつのプロジェクトに向き合っています。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ページ1-3: 事業内容 */}
        {businessAreas.map((area, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              currentPage === index + 1
                ? "opacity-100 translate-y-0"
                : currentPage > index + 1
                  ? "opacity-0 -translate-y-full pointer-events-none"
                  : "opacity-0 translate-y-full pointer-events-none"
            }`}
          >
            <div className="absolute inset-0">
              <Image
                src={area.image || "/placeholder.svg"}
                alt={`${area.title}の施工例`}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-[#3d4f5f]/70"></div>
            </div>

            <div className="relative z-10 h-full">
              {/* デスクトップレイアウト */}
              <div
                className={`hidden lg:flex h-full items-end ${area.position === "left" ? "justify-start" : "justify-end"} max-w-6xl mx-auto px-8 pb-16`}
              >
                <div className="flex flex-col justify-start max-w-xl">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8">
                    {area.title}
                  </h3>
                  <ul className="space-y-3">
                    {area.services.map((service, serviceIndex) => (
                      <li
                        key={serviceIndex}
                        className="text-base sm:text-lg text-white/90 leading-relaxed flex items-start gap-3"
                      >
                        <span className="text-white/70 mt-0.5">—</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* モバイルレイアウト */}
              <div className="lg:hidden flex flex-col px-8 sm:px-12 py-12 h-full justify-center">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-8">{area.title}</h3>
                <ul className="space-y-3">
                  {area.services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      className="text-base sm:text-lg text-white/90 leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-white/70 mt-0.5">—</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
