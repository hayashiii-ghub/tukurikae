"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    constructionAddress: "",
    hasBlueprint: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-4">
          お問い合わせありがとうございます
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          内容を確認の上、担当者よりご連絡いたします。
          <br />
          しばらくお待ちください。
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* お名前 */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          placeholder="山田 太郎"
        />
      </div>

      {/* ご住所 */}
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
          ご住所
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          placeholder="東京都渋谷区..."
        />
      </div>

      {/* メールアドレス */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          placeholder="example@email.com"
        />
      </div>

      {/* 電話番号 */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          電話番号
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          placeholder="090-1234-5678"
        />
      </div>

      {/* 工事予定の住所 */}
      <div>
        <label htmlFor="constructionAddress" className="block text-sm font-medium text-foreground mb-2">
          工事予定の住所
        </label>
        <input
          type="text"
          id="constructionAddress"
          name="constructionAddress"
          value={formData.constructionAddress}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          placeholder="千葉県船橋市..."
        />
      </div>

      {/* 図面の有無 */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">図面の有無</label>
        <div className="flex flex-wrap gap-6">
          {[
            { value: "yes", label: "有り" },
            { value: "no", label: "無し" },
            { value: "unknown", label: "不明" },
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="radio"
                  name="hasBlueprint"
                  value={option.value}
                  checked={formData.hasBlueprint === option.value}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 transition-colors ${
                    formData.hasBlueprint === option.value
                      ? "border-primary bg-primary"
                      : "border-border group-hover:border-primary/50"
                  }`}
                >
                  {formData.hasBlueprint === option.value && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  )}
                </div>
              </div>
              <span className="text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* お問合せ内容 */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          お問合せ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
          placeholder="ご相談内容をご記入ください"
        />
      </div>

      {/* 送信ボタン */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-4 text-lg font-medium hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              送信中...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              送信する
            </>
          )}
        </button>
      </div>

      <p className="text-sm text-muted-foreground">
        <span className="text-red-500">*</span> は必須項目です
      </p>
    </form>
  )
}
