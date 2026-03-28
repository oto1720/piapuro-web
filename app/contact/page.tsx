import { ContactForm } from './ContactForm';

const contactMethods = [
  {
    icon: (
      <svg className="w-8 h-8 text-secondary-token" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "メール",
    description: "お気軽にメールでお問い合わせください",
    contact: "piapuro2024@gmail.com",
    link: "mailto:piapuro2024@gmail.com"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-secondary-token" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "活動場所",
    description: "見学も大歓迎です",
    contact: "福岡大学 14号館 3階",
    link: null
  },
  {
    icon: (
      <svg className="w-8 h-8 text-secondary-token" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "活動時間",
    description: "定期活動は毎週開催",
    contact: "毎週月曜日、木曜日 18:00〜20:00",
    link: null
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-primary-token">
      {/* ヒーローセクション */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-primary-token mb-8 tracking-tight">
            Contact
          </h1>
          <p className="text-xl md:text-2xl text-secondary-token font-light max-w-3xl mx-auto leading-relaxed">
            ご質問やご相談がございましたら、お気軽にお問い合わせください
          </p>
        </div>
      </section>

      {/* 連絡方法セクション */}
      <section className="py-20 bg-[color-mix(in_srgb,var(--surface-muted)_65%,transparent)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[var(--surface-raised)] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-[var(--border-subtle)]">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-medium text-primary-token mb-4">
                  {method.title}
                </h3>
                <p className="text-secondary-token font-light mb-6">
                  {method.description}
                </p>
                {method.link ? (
                  <a
                    href={method.link}
                    className="tap-target inline-flex items-center text-primary-token hover:text-secondary-token font-medium transition-colors"
                  >
                    {method.contact}
                  </a>
                ) : (
                  <p className="text-primary-token font-medium">
                    {method.contact}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-primary-token mb-6 tracking-tight">
              お問い合わせフォーム
            </h2>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* よくある質問セクション */}
      <section className="py-20 bg-[color-mix(in_srgb,var(--surface-muted)_65%,transparent)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-primary-token mb-6 tracking-tight">
              よくある質問
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "見学はいつでもできますか？",
                answer: "活動日の毎週月曜日、木曜日18:00〜20:00の間でしたら、いつでも見学可能です。"
              },
              {
                question: "入会に費用はかかりますか？",
                answer: "今の所はかかりません。"
              },
              {
                question: "どのくらいの経験が必要ですか？",
                answer: "経験は一切不要です。初心者の方も多数在籍しており、みんなで一緒に学んでいく環境です。"
              },
              {
                question: "途中から参加することはできますか？",
                answer: "はい、年間を通していつでも参加可能です。新しいメンバーはいつでも大歓迎です。"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[var(--surface-raised)] border border-[var(--border-subtle)] rounded-3xl p-8">
                <h3 className="text-xl font-medium text-primary-token mb-4">
                  Q. {faq.question}
                </h3>
                <p className="text-secondary-token font-light leading-relaxed">
                  A. {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}