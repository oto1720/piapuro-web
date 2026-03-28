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
    description: "定期的な勉強会やワークショップで、創作技術を向上させることができます。",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-secondary-token" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "仲間との出会い",
    description: "同じ趣味を持つ仲間と出会い、一緒に創作活動を楽しむことができます。",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-secondary-token" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "作品発表の場",
    description: "定期的な作品展やコンテストで、あなたの作品を多くの人に見てもらえます。",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-secondary-token" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "創作への情熱共有",
    description: "創作への熱い想いを共有し、お互いに刺激し合いながら成長できます。",
  },
];

const requirements = [
  "創作活動に興味・関心がある方",
  "仲間と協調して活動できる方",
  "向上心を持って取り組める方",
];

const specs = [
  { label: '対象', value: '学生（ほかの大学でも可）' },
  { label: '募集人数', value: '何人でも' },
  { label: '活動費', value: '今の所なし' },
  { label: '活動日時', value: '毎週月曜日、木曜日 18:00〜20:00' },
  { label: '活動場所', value: '福岡大学 14号館 3階' },
];

const faqs = [
  {
    question: '初心者でも参加できますか？',
    answer:
      'もちろんです。経験や技術レベルは問いません。みんなで一緒に学び、成長していくことを大切にしています。',
  },
  {
    question: 'いるものはありますか？',
    answer: '基本的にパソコンがあれば大丈夫です。',
  },
  {
    question: '毎回参加しなければいけませんか？',
    answer:
      '無理に毎回参加する必要はありません。学業や他の活動との両立を考慮し、無理のない範囲での参加をお願いしています。',
  },
  {
    question: 'どんなジャンルの創作活動を行っていますか？',
    answer: 'モバイルアプリ開発やweb開発、ゲーム開発をしている人が多いですがジャンルは問いません。',
  },
];

export default function Recruit() {
  return (
    <div className="min-h-screen overflow-hidden bg-[var(--background)] text-primary-token">
      <section className="relative isolate py-20 md:py-28 lg:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-28 -left-16 h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--accent)_16%,transparent)] blur-3xl" />
          <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-[color-mix(in_srgb,var(--surface-hover)_78%,transparent)] blur-3xl" />
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,color-mix(in_srgb,var(--border-subtle)_30%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--border-subtle)_30%,transparent)_1px,transparent_1px)] [background-size:44px_44px] opacity-35" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12 items-end">
            <div>
              <p className="mb-5 text-xs font-semibold tracking-[0.28em] uppercase text-muted-token">
                Recruit 2026
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-thin leading-[0.9] tracking-tight text-primary-token">
                Join Us
              </h1>
              <p className="mt-8 max-w-2xl text-lg md:text-2xl text-secondary-token font-light leading-relaxed">
                新しい仲間をお待ちしています。つくることを楽しみ、挑戦を続けるメンバーと一緒に次の作品を生み出しましょう。
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="group tap-target inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-[var(--accent-contrast)] rounded-full px-9 py-4 text-lg font-medium transition-[transform,opacity] duration-300 hover:opacity-90 hover:scale-105"
                >
                  今すぐ連絡する
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                    ↗
                  </span>
                </Link>
                <Link
                  href="/activities"
                  className="group tap-target inline-flex items-center justify-center gap-2 bg-[var(--surface-raised)] border border-[var(--border-subtle)] text-primary-token rounded-full px-9 py-4 text-lg font-medium transition-[transform,background-color] duration-300 hover:bg-[var(--surface-muted)] hover:scale-105"
                >
                  活動を見る
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--surface-muted)] p-7 md:p-8 shadow-xl shadow-black/5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-token">Now Open</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-thin tracking-tight text-primary-token">現在募集中</h2>
              <p className="mt-4 text-secondary-token font-light leading-relaxed">
                随時メンバーを募集しています。見学だけでも歓迎です。
              </p>
              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-4 text-center">
                  <div className="text-xs uppercase tracking-[0.16em] text-muted-token">活動日</div>
                  <div className="mt-2 text-lg font-medium text-primary-token">週2回</div>
                </div>
                <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-4 text-center">
                  <div className="text-xs uppercase tracking-[0.16em] text-muted-token">参加費</div>
                  <div className="mt-2 text-lg font-medium text-primary-token">現在なし</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-24 bg-[color-mix(in_srgb,var(--surface-muted)_65%,transparent)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 md:mb-16">
            <p className="mb-4 text-xs font-semibold tracking-[0.28em] uppercase text-muted-token">Why PIA PRO</p>
            <h2 className="text-4xl md:text-6xl font-thin text-primary-token tracking-tight">
              サークルで得られること
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                  className={`rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-7 md:p-8 transition-[box-shadow,border-color] duration-300 hover:shadow-lg hover:shadow-black/5 hover:border-[color-mix(in_srgb,var(--accent)_18%,var(--border-subtle))] ${index % 2 === 1 ? 'md:translate-y-10' : ''}`}
              >
                <div className="flex items-start gap-5 md:gap-6">
                  <div className="mt-1 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-muted)]">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium text-primary-token tracking-tight mb-3 md:mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-secondary-token font-light leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 xl:grid-cols-[1fr_1.05fr] gap-10 xl:gap-14">
          <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-8 md:p-10">
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-muted-token mb-4">Requirements</p>
            <h2 className="text-4xl md:text-5xl font-thin text-primary-token tracking-tight mb-8">応募条件</h2>
            <ul className="space-y-5">
              {requirements.map((requirement) => (
                <li key={requirement} className="flex items-start gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-contrast)]">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-secondary-token font-light text-lg leading-relaxed">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-muted)] p-8 md:p-10">
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-muted-token mb-4">Specs</p>
            <h2 className="text-4xl md:text-5xl font-thin text-primary-token tracking-tight mb-8">募集要項</h2>
            <dl className="space-y-5">
              {specs.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-1 sm:grid-cols-[7.5rem_1fr] gap-2 sm:gap-4 border-b border-[color-mix(in_srgb,var(--border-subtle)_85%,transparent)] pb-4"
                >
                  <dt className="text-primary-token font-medium">{item.label}</dt>
                  <dd className="text-secondary-token font-light leading-relaxed">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[color-mix(in_srgb,var(--surface-muted)_58%,transparent)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 md:mb-16">
            <p className="mb-4 text-xs font-semibold tracking-[0.28em] uppercase text-muted-token">FAQ</p>
            <h2 className="text-4xl md:text-6xl font-thin text-primary-token tracking-tight">よくある質問</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-7 md:p-8">
                <h3 className="text-xl md:text-2xl font-medium text-primary-token tracking-tight mb-4">
                  Q. {faq.question}
                </h3>
                <p className="text-secondary-token font-light leading-relaxed">A. {faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--surface-raised)] px-8 py-12 md:px-12 md:py-14 text-center">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.28em] uppercase text-muted-token">Let&apos;s Start</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-primary-token tracking-tight mb-6 md:mb-8">
                まずは気軽にお問い合わせください
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-secondary-token font-light leading-relaxed mb-10">
                見学だけでも大歓迎です。創作活動を通じて、素晴らしい仲間との出会いが待っています。
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  href="/contact"
                  className="group tap-target inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-[var(--accent-contrast)] px-10 py-4 rounded-full text-lg font-medium transition-[transform,opacity] duration-300 hover:opacity-90 hover:scale-105"
                >
                  お問い合わせ
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                    ↗
                  </span>
                </Link>
                <Link
                  href="/activities"
                  className="group tap-target inline-flex items-center justify-center bg-[var(--surface-muted)] border border-[var(--border-subtle)] text-primary-token px-10 py-4 rounded-full text-lg font-medium transition-[transform,background-color] duration-300 hover:bg-[var(--surface-hover)] hover:scale-105"
                >
                  活動記録を見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}