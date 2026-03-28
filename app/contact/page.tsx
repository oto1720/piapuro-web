import { ContactForm } from './ContactForm';
import { getSocialLinks } from '@/lib/data';

const socialLinks = getSocialLinks();

function getSocialIcon(id: string) {
  if (id === 'twitter') {
    return (
      <svg className="w-7 h-7 text-secondary-token" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 2H22l-6.77 7.73L23.2 22H16.9l-4.93-6.53L6.24 22H3.1l7.24-8.28L.8 2h6.46l4.45 5.9L18.9 2zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20z" />
      </svg>
    );
  }

  return (
    <svg className="w-7 h-7 text-secondary-token" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h8M8 14h5m-6 7h10a2 2 0 002-2V7a2 2 0 00-2-2h-1l-1-2h-6L8 5H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen overflow-hidden bg-[var(--background)] text-primary-token">
      <section className="relative pt-12 pb-10 md:pt-16 md:pb-12 lg:pt-20 lg:pb-14">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-12 h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] blur-3xl" />
          <div className="absolute top-12 right-0 h-80 w-80 rounded-full bg-[color-mix(in_srgb,var(--surface-hover)_75%,transparent)] blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <p className="mb-4 text-xs font-semibold tracking-[0.28em] uppercase text-muted-token">Contact Route</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-primary-token tracking-tight mb-4 md:mb-6">
            Contact
          </h1>
          <p className="text-lg md:text-2xl text-secondary-token font-light max-w-3xl leading-relaxed">
            {'見学相談や質問などは、Xかマシュマロから気軽にご連絡ください。'}
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 xl:gap-10 items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
            {socialLinks.map((link) => (
              <article
                key={link.id}
                className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-7 md:p-8 shadow-sm transition-[box-shadow,border-color] duration-300 hover:shadow-xl hover:shadow-black/10 hover:border-[color-mix(in_srgb,var(--accent)_22%,var(--border-subtle))]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-muted)]">
                  {getSocialIcon(link.id)}
                </div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-token mb-2">{link.platform}</p>
                <h2 className="text-2xl md:text-3xl font-medium text-primary-token tracking-tight mb-3">
                  {link.title}
                </h2>
                <p className="text-secondary-token font-light leading-relaxed mb-5">
                  {link.description}
                </p>
                <p className="text-primary-token font-medium mb-6">{link.handle}</p>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group tap-target inline-flex items-center justify-center gap-2 w-full rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] px-6 py-3.5 font-medium transition-[transform,opacity] duration-300 hover:opacity-90 hover:scale-[1.02]"
                >
                  {link.cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </article>
            ))}
          </div>

          <aside className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-muted)] p-7 md:p-8">
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-muted-token mb-4">Visit Info</p>
            <h2 className="text-3xl md:text-4xl font-thin tracking-tight text-primary-token mb-5">見学案内</h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm text-muted-token">活動場所</dt>
                <dd className="text-primary-token font-medium mt-1">福岡大学 14号館 3階</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-token">活動時間</dt>
                <dd className="text-primary-token font-medium mt-1">毎週月曜日、木曜日 18:00〜20:00</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-token">メール</dt>
                <dd className="mt-1">
                  <a href="mailto:piapuro2024@gmail.com" className="text-primary-token font-medium hover:text-secondary-token transition-colors">
                    piapuro2024@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-muted-token mb-4">Mail Form</p>
            <h2 className="text-4xl md:text-5xl font-thin text-primary-token mb-6 tracking-tight">
              メールで問い合わせる
            </h2>
            <p className="text-secondary-token font-light leading-relaxed">
              SNSが使いにくい場合は、こちらのフォームからメールアプリを起動できます。
            </p>
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