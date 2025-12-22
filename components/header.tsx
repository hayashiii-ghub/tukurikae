"use client"
import { X } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    closeMenu()
  }

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      scrollToSection(sectionId)
    }
  }

  const useWhiteUI = isMenuOpen || (isHomePage && !isScrolled)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isMenuOpen
          ? "bg-transparent"
          : isScrolled || !isHomePage
            ? "bg-white/98 backdrop-blur-md shadow-lg"
            : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between py-5 px-6 lg:px-12">
        <Link href="/" onClick={handleLogoClick} className="flex items-center space-x-3 hover:opacity-80">
          <Image
            src="/brand-logo-white.png"
            alt="ツクリカエ"
            width={52}
            height={52}
            className={`object-contain ${!useWhiteUI ? "brightness-0 sepia saturate-[500%] hue-rotate-[180deg]" : ""}`}
            style={
              !useWhiteUI
                ? {
                    filter:
                      "brightness(0) saturate(100%) invert(24%) sepia(25%) saturate(1000%) hue-rotate(175deg) brightness(95%) contrast(90%)",
                  }
                : {}
            }
          />
          <span
            className={`font-serif font-bold text-xl tracking-wide ${
              !useWhiteUI ? "text-[rgba(35,74,105,1)]" : "text-white"
            }`}
          >
            ツクリカエ
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-12">
          {[
            { id: "portfolio", label: "施工事例" },
            { id: "services", label: "事業内容" },
            { id: "message", label: "代表メッセージ" },
            { id: "contact", label: "お問い合わせ" },
          ].map((item) => (
            <Link
              key={item.id}
              href={isHomePage ? `#${item.id}` : `/#${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`relative text-sm font-medium tracking-wider ${
                !useWhiteUI ? "text-[rgba(35,74,105,1)]" : "text-white"
              } after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] hover:after:w-full ${
                !useWhiteUI ? "after:bg-[rgba(35,74,105,1)]" : "after:bg-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          className={`lg:hidden flex flex-col items-center gap-1 p-2 relative z-50 ${
            !useWhiteUI ? "text-[rgba(35,74,105,1)]" : "text-white"
          }`}
          aria-label="メニューを開く"
        >
          {isMenuOpen ? (
            <X size={28} />
          ) : (
            <>
              <span className={`block w-6 h-[2px] ${!useWhiteUI ? "bg-[rgba(35,74,105,1)]" : "bg-white"}`} />
              <span className={`block w-6 h-[2px] ${!useWhiteUI ? "bg-[rgba(35,74,105,1)]" : "bg-white"}`} />
            </>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-[rgba(35,74,105,0.98)] z-40">
          <div className="flex flex-col items-center justify-center h-full">
            <nav className="flex flex-col items-center space-y-10">
              {[
                { id: "portfolio", label: "施工事例" },
                { id: "services", label: "事業内容" },
                { id: "message", label: "代表メッセージ" },
                { id: "contact", label: "お問い合わせ" },
              ].map((item) => (
                <Link
                  key={item.id}
                  href={isHomePage ? `#${item.id}` : `/#${item.id}`}
                  onClick={() => {
                    if (isHomePage) {
                      scrollToSection(item.id)
                    } else {
                      closeMenu()
                    }
                  }}
                  className="text-white text-xl font-serif tracking-[0.2em] hover:opacity-70"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
