"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, ArrowRight } from "lucide-react"

type Category = "all" | "minpaku" | "steel" | "wooden"

interface WorkItem {
  id: number
  title: string
  category: Category
  tags: string[]
  location: string
  image: string
  description: string
  link?: string
}

const works: WorkItem[] = [
  {
    id: 1,
    title: "【戸建てリノベーション｜民泊対応】\n自然と暮らし、そして滞在をつなぐ住まい",
    category: "minpaku",
    tags: ["minpaku", "wooden"],
    location: "伊豆・静岡県賀茂郡",
    image: "/minpaku-renovation.png",
    description: "",
    link: "/works/izu",
  },
  {
    id: 2,
    title: "【古民家民泊リノベーション】\n自然と食の魅力を活かした、里山の宿",
    category: "minpaku",
    tags: ["minpaku", "wooden"],
    location: "勝浦・千葉県勝浦市",
    image: "/japanese-house-renovation.png",
    description: "",
    link: "/works/katsura",
  },
  {
    id: 3,
    title: "【旅館業リノベーション】\n駅近ビルを、一棟まるごと宿泊施設へ",
    category: "steel",
    tags: ["steel"],
    location: "葛西・東京都江戸川区",
    image: "/commercial-conversion.png",
    description: "",
    link: "/works/kasai",
  },
  {
    id: 4,
    title: "【民泊リノベーション】\n空き家に新しい用途と価値を吹き込む再生工事",
    category: "minpaku",
    tags: ["minpaku", "wooden"],
    location: "小岩・東京都江戸川区",
    image: "/minpaku-renovation.png",
    description: "",
    link: "/works/koiwa",
  },
  {
    id: 5,
    title: "【古民家リノベーション】\n暮らしのステージが変わった、これからの住まい",
    category: "wooden",
    tags: ["wooden"],
    location: "船橋・千葉県船橋市",
    image: "/modern-japanese-house.png",
    description: "",
    link: "/works/funabashi",
  },
]

const categoryLabels: Record<Category, string> = {
  all: "すべて",
  minpaku: "民泊",
  wooden: "木造",
  steel: "鉄骨造",
}

function WorksContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [selectedCategory, setSelectedCategory] = useState<Category>("all")

  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam && ["minpaku", "steel", "wooden"].includes(categoryParam)) {
      setSelectedCategory(categoryParam as Category)
    } else {
      setSelectedCategory("all")
    }
  }, [])

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category)
    if (category === "all") {
      router.replace(pathname, { scroll: false })
    } else {
      router.replace(`${pathname}?category=${category}`, { scroll: false })
    }
  }

  const filteredWorks =
    selectedCategory === "all"
      ? works
      : works.filter((work) => work.category === selectedCategory || work.tags.includes(selectedCategory))

  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-4 sm:pb-5">
        <div className="absolute inset-0 bg-[rgb(27,56,77)]" />
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8">
            {/* Left side: Title, Breadcrumb, and Tags */}
            <div className="text-center lg:text-left">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                施工事例
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-primary-foreground/80 text-sm mb-6">
                <Link href="/" className="hover:text-primary-foreground transition-colors">
                  HOME
                </Link>
                <span>/</span>
                <span>施工事例</span>
              </div>
              {/* Tags moved here */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3">
                <div className="flex justify-center lg:justify-start gap-3">
                  {(["all", "minpaku"] as Category[]).map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-primary-foreground text-primary"
                          : "bg-transparent text-primary-foreground border border-primary-foreground/50 hover:bg-primary-foreground/10"
                      }`}
                    >
                      {categoryLabels[category]}
                    </button>
                  ))}
                </div>
                <div className="flex justify-center lg:justify-start gap-3">
                  {(["wooden", "steel"] as Category[]).map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-primary-foreground text-primary"
                          : "bg-transparent text-primary-foreground border border-primary-foreground/50 hover:bg-primary-foreground/10"
                      }`}
                    >
                      {categoryLabels[category]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Contact Button only */}
            <div className="hidden lg:flex justify-center lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 text-base font-medium hover:bg-white/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                お問い合わせフォームへ
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="pt-4 sm:pt-5 pb-8 sm:pb-10 bg-[rgb(27,56,77)]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work) => (
              <article key={work.id} className="group overflow-hidden border border-primary-foreground/80">
                {work.link ? (
                  <Link href={work.link} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {work.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-primary-foreground text-primary text-xs">
                            {tag === "minpaku" ? "民泊" : tag === "steel" ? "鉄骨造" : "木造"}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-primary-foreground/70 text-sm mb-2">{work.location}</p>
                      <h3 className="font-serif text-xl font-bold text-primary-foreground mb-2 whitespace-pre-line">
                        {work.title}
                      </h3>
                      {work.description && <p className="text-primary-foreground/80 text-sm">{work.description}</p>}
                    </div>
                  </Link>
                ) : (
                  <>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {work.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-primary-foreground text-primary text-xs">
                            {tag === "minpaku" ? "民泊" : tag === "steel" ? "鉄骨造" : "木造"}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-primary-foreground/70 text-sm mb-2">{work.location}</p>
                      <h3 className="font-serif text-xl font-bold text-primary-foreground mb-2 whitespace-pre-line">
                        {work.title}
                      </h3>
                      {work.description && <p className="text-primary-foreground/80 text-sm">{work.description}</p>}
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>

          {filteredWorks.length === 0 && (
            <div className="text-center py-16">
              <p className="text-primary-foreground/80">該当する施工事例がありません</p>
            </div>
          )}

          {/* Mobile only: Contact Button */}
          <div className="flex lg:hidden justify-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 text-base font-medium hover:bg-white/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              お問い合わせフォームへ
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default function WorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-screen bg-primary" />}>
          <WorksContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
