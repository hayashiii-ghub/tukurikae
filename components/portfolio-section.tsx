"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function PortfolioSection() {
  const router = useRouter()
  const [currentImages, setCurrentImages] = useState([0, 0, 0, 0])
  const [isTransitioning, setIsTransitioning] = useState([false, false, false, false])

  const portfolioItems = [
    {
      title: "木造",
      images: [
        "/funabashi-living-room-blue-accent.jpg",
        "/japanese-living-room-with-river-view.jpg",
        "/funabashi-renovated-tatami-room.jpg",
      ],
      href: "/works?category=wooden",
    },
    {
      title: "鉄骨造",
      images: [
        "/stylish-hotel-room-with-warm-lighting.jpg",
        "/hotel-common-area-with-modern-japanese-design.jpg",
        "/hotel-bedroom-with-city-view.jpg",
      ],
      href: "/works?category=steel",
    },
    {
      title: "民泊",
      images: [
        "/japanese-cafe-interior-with-wooden-beams.jpg",
        "/minimalist-japanese-bedroom-with-tatami.jpg",
        "/renovated-japanese-kitchen-with-indirect-lighting.jpg",
      ],
      href: "/works?category=minpaku",
    },
    {
      title: "実績をもっと見る",
      images: [
        "/traditional-japanese-farmhouse-exterior-with-natur.jpg",
        "/funabashi-exterior-kominka.jpg",
        "/open-kitchen-counter-in-japanese-style.jpg",
      ],
      href: "/works",
      isViewMore: true,
    },
  ]

  useEffect(() => {
    const intervals = portfolioItems.map((_, index) => {
      const delay = index * 1000
      return setTimeout(() => {
        return setInterval(
          () => {
            setIsTransitioning((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
            setTimeout(() => {
              setCurrentImages((prev) => {
                const newImages = [...prev]
                newImages[index] = (newImages[index] + 1) % portfolioItems[index].images.length
                return newImages
              })
              setIsTransitioning((prev) => {
                const newState = [...prev]
                newState[index] = false
                return newState
              })
            }, 600)
          },
          5000 + index * 500,
        )
      }, delay)
    })

    return () => {
      intervals.forEach((interval) => clearTimeout(interval))
    }
  }, [])

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="bg-[rgb(27,56,77)] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {portfolioItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            scroll={true}
            className="group relative aspect-square overflow-hidden text-left"
          >
            {/* Background image with transition */}
            <img
              src={item.images[currentImages[index]] || "/placeholder.svg"}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] ease-in-out group-hover:scale-105"
              style={{ opacity: isTransitioning[index] ? 0 : 1 }}
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">{item.title}</h3>
              {item.isViewMore ? (
                <div className="flex flex-col items-center">
                  <div className="w-12 h-[1px] bg-white/60 group-hover:w-20 transition-all duration-300" />
                  <span className="text-white/70 text-xl sm:text-2xl mt-3 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity animate-bounce-x">
                    →
                  </span>
                </div>
              ) : (
                <div className="w-12 h-[1px] bg-white/60 group-hover:w-20 transition-all duration-300" />
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
