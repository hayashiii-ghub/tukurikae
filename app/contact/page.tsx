import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "お問い合わせ | ツクリカエ",
  description:
    "空き家の活用やリノベーションに関するご相談は、お気軽にお問い合わせください。現地調査から設計・施工まで、丁寧にサポートいたします。",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">お問い合わせ</h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            空き家の活用やリノベーションに関するご相談は、お気軽にお問い合わせください。
            <br className="hidden sm:block" />
            現地調査から設計・施工まで、丁寧にサポートいたします。
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
