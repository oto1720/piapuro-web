import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'メンバー募集',
  description: '福大ピアプロでは新しいメンバーを募集しています。創作活動に興味のある方はお気軽にお問い合わせください。',
};

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8 text-secondary-token" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "スキルアップ",
    description: "定期的な勉強会やワークショップで、創作技術を向上させることができます。"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-secondary-token" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "仲間との出会い",
    description: "同じ趣味を持つ仲間と出会い、一緒に創作活動を楽しむことができます。"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-secondary-token" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "作品発表の場",
    description: "定期的な作品展やコンテストで、あなたの作品を多くの人に見てもらえます。"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-secondary-token" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "創作への情熱共有",
    description: "創作への熱い想いを共有し、お互いに刺激し合いながら成長できます。"
  }
];

const requirements = [
  "創作活動に興味・関心がある方",
  "仲間と協調して活動できる方",
  "向上心を持って取り組める方"
];

export default function Recruit() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-primary-token">
      {/* ヒーローセクション */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-primary-token mb-8 tracking-tight">
                Join Us
              </h1>
              <p className="text-xl md:text-2xl text-secondary-token font-light max-w-3xl leading-relaxed">
                新しい仲間をお待ちしています！
              </p>
            </div>
            <div className="bg-[var(--surface-muted)] border border-[var(--border-subtle)] rounded-3xl p-7 shadow-sm">
              <div className="text-2xl font-medium text-primary-token mb-3">現在募集中</div>
              <p className="text-secondary-token font-light leading-relaxed mb-6">
                随時メンバーを募集しています
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[var(--surface-raised)] border border-[var(--border-subtle)] p-4 text-center">
                  <div className="text-sm text-muted-token">活動日</div>
                  <div className="text-primary-token font-medium">週2回</div>
                </div>
                <div className="rounded-2xl bg-[var(--surface-raised)] border border-[var(--border-subtle)] p-4 text-center">
                  <div className="text-sm text-muted-token">参加費</div>
                  <div className="text-primary-token font-medium">現在なし</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* メリットセクション */}
      <section className="py-20 bg-[color-mix(in_srgb,var(--surface-muted)_65%,transparent)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-primary-token mb-6 tracking-tight">
              サークルに参加するメリット
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-[var(--surface-raised)] border border-[var(--border-subtle)] rounded-3xl p-8 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1 transition-[transform,box-shadow] duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[var(--surface-muted)] border border-[var(--border-subtle)] rounded-2xl flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-primary-token mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-secondary-token font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 募集要項セクション */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-thin text-primary-token mb-8 tracking-tight">
                募集要項
              </h2>
              <div className="bg-[var(--surface-muted)] border border-[var(--border-subtle)] rounded-3xl p-8">
                <div className="space-y-6">
                  {[
                    { label: "対象", value: "学生（ほかの大学でも可）" },
                    { label: "募集人数", value: "何人でも" },
                    { label: "活動費", value: "今の所なし" },
                    { label: "活動日時", value: "毎週月曜日、木曜日 18:00〜20:00" },
                    { label: "活動場所", value: "福岡大学 14号館 3階" }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <div className="font-medium text-primary-token sm:w-24">
                        {item.label}
                      </div>
                      <div className="text-secondary-token font-light">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-thin text-primary-token mb-8 tracking-tight">
                応募条件
              </h2>
              <div className="bg-[var(--surface-muted)] border border-[var(--border-subtle)] rounded-3xl p-8">
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-[var(--accent)] rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-[var(--accent-contrast)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-secondary-token font-light">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問セクション */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-primary-token mb-6 tracking-tight">
              よくある質問
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "初心者でも参加できますか？",
                answer: "もちろんです！経験や技術レベルは問いません。みんなで一緒に学び、成長していくことを大切にしています。"
              },
              {
                question: "いるものはありますか？",
                answer: "基本的にパソコンがあれば大丈夫です。"
              },
              {
                question: "毎回参加しなければいけませんか？",
                answer: "無理に毎回参加する必要はありません。学業や他の活動との両立を考慮し、無理のない範囲での参加をお願いしています。"
              },
              {
                question: "どんなジャンルの創作活動を行っていますか？",
                answer: "モバイルアプリ開発やweb開発、ゲーム開発をしている人が多いですがジャンルは問いません。"
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

      {/* CTAセクション */}
      <section className="py-20 bg-[color-mix(in_srgb,var(--surface-muted)_65%,transparent)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-thin text-primary-token mb-8 tracking-tight">
              まずは気軽にお問い合わせください
            </h2>
            <p className="text-lg text-secondary-token font-light mb-12 leading-relaxed">
              興味を持っていただけた方は、お気軽にお問い合わせください。<br />
              見学だけでも大歓迎です！創作活動を通じて、素晴らしい仲間との出会いが待っています。
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="tap-target inline-flex items-center justify-center bg-[var(--accent)] text-[var(--accent-contrast)] px-10 py-4 rounded-full text-lg font-medium transition-[transform,opacity] duration-300 hover:opacity-90 hover:scale-105"
              >
                お問い合わせ
              </Link>
              <Link
                href="/activities"
                className="tap-target inline-flex items-center justify-center bg-[var(--surface-raised)] border border-[var(--border-subtle)] text-primary-token px-10 py-4 rounded-full text-lg font-medium transition-[transform,background-color] duration-300 hover:bg-[var(--surface-muted)] hover:scale-105"
              >
                活動記録を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}