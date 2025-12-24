import { Mail, Instagram } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-0 bg-primary text-white">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/5 px-8 py-20 sm:px-12 sm:py-28 lg:px-16 lg:py-32 xl:px-24">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-12">お問い合わせ</h2>

          {/* モバイル表示 */}
          <div className="sm:hidden text-base leading-[2.2] text-white/80">
            <p>
              空き家の活用やリノベーションに関するご相談は、
              <br />
              お気軽にお問い合わせください。
              <br />
              現地調査から設計・施工まで、丁寧にサポートいたします。
            </p>
          </div>
          {/* デスクトップ表示 */}
          <div className="hidden sm:block text-base sm:text-lg leading-relaxed text-white/80 space-y-3">
            <p>空き家の活用やリノベーションに関するご相談は、お気軽にお問い合わせください。</p>
            <p>現地調査から設計・施工まで、丁寧にサポートいたします。</p>
          </div>
        </div>

        <div className="lg:w-3/5 flex flex-col">
          {/* 上：メール */}
          <Link
            href="/contact"
            className="flex-1 bg-[rgb(60,78,94)] relative px-8 py-12 sm:px-12 lg:px-16 xl:px-20 flex items-center group hover:opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:z-10 cursor-pointer"
          >
            <div className="absolute inset-0 bg-white/10 transition-opacity duration-300 group-hover:bg-white/20"></div>
            <div className="flex items-center gap-10 relative z-10">
              <Mail className="w-8 h-8 sm:w-12 sm:h-12 text-white transition-transform duration-300 group-hover:scale-110" />
              <p className="text-white text-lg sm:text-2xl font-medium">info@tsukurikae.jp</p>
            </div>
            <div className="absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 z-10">
              <span className="text-white/70 text-xl sm:text-2xl sm:opacity-0 sm:group-hover:opacity-100 transition-opacity animate-bounce-x">
                →
              </span>
            </div>
          </Link>

          {/* 下：インスタグラム */}
          <a
            href="https://instagram.com/tsukurikae_kominka"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[rgb(60,78,94)] relative px-8 py-12 sm:px-12 lg:px-16 xl:px-20 flex items-center group hover:opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:z-10 cursor-pointer"
          >
            <div className="absolute inset-0 bg-pink-500/15 transition-opacity duration-300 group-hover:bg-pink-500/25"></div>
            <div className="flex items-center gap-10 relative z-10">
              <Instagram className="w-8 h-8 sm:w-12 sm:h-12 text-white transition-transform duration-300 group-hover:scale-110" />
              <p className="text-white text-lg sm:text-2xl font-medium">@tsukurikae_kominka</p>
            </div>
            <div className="absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 z-10">
              <span className="text-white/70 text-xl sm:text-2xl sm:opacity-0 sm:group-hover:opacity-100 transition-opacity animate-bounce-x">
                →
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
