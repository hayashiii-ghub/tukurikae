"use client"
import Image from "next/image"

export function Footer() {
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
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-[#234b69] text-white">
      <div className="w-full px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Logo and tagline */}
            <div className="lg:col-span-2">
              <button onClick={scrollToTop} className="hover:opacity-80 transition-opacity">
                <Image
                  src="/footer-logo-white.png"
                  alt="ツクリカエ"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </button>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-6">Navigation</h3>
              <nav className="flex flex-col space-y-4">
                {[
                  { id: "portfolio", label: "施工事例" },
                  { id: "services", label: "事業内容" },
                  { id: "message", label: "代表メッセージ" },
                  { id: "contact", label: "お問い合わせ" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/80 text-sm text-left hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-6">Contact</h3>
              <div className="space-y-3 text-white/80 text-sm">
                <p>info@tsukurikae.jp</p>
                <p>〒274-0062</p>
                <p>千葉県船橋市坪井町107</p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-xs tracking-wider">© TSUKURIKAE.inc All Rights Reserved.</p>
            <button onClick={scrollToTop} className="text-white/50 text-xs hover:text-white transition-colors">
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
