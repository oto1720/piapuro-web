import { Metadata } from 'next';
import { getCircleInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'サークルについて',
  description: '福大ピアプロの歴史、理念、活動内容について詳しくご紹介します。',
};

const principles = [
  {
    title: '好きなことを通して成長する',
    description: '好きなことを各自が自由にやっているサークルです。好きなことで成長できたら、ラッキー。',
  },
  {
    title: '情熱を無駄にしない',
    description: 'プログラミングやゲーム開発などに挑戦したいけれど、何から始めればいいか分からない人の手助けをしたい。',
  },
  {
    title: 'すぐに行動する',
    description: 'やりたい事があれば、すぐに自分から行動しましょう。',
  },
  {
    title: '私たちは対等な関係',
    description: '学年に関係なく、気楽にフラットに接しましょう。',
  },
] as const;

const timeline = [
  {
    year: '2023',
    title: 'サークル設立',
    description: 'プロプロという名前で活動',
  },
  {
    year: '2024',
    title: 'プロプロからピアプロに変更',
    description: 'ピアサポートとの合併',
  },
  {
    year: '2025',
    title: 'メンバー拡充',
    description: '20名を超えるメンバーが参加',
  },
  {
    year: '2025',
    title: 'さまざまなイベントに参加',
    description: 'ハッカソンや展示会等に積極的に参加',
  },
] as const;

const activities = [
  {
    title: '定期勉強会',
    description: '毎週2回の集まりで、チーム開発やLT会を行なっています。',
  },
  {
    title: '作品制作',
    description: '個人制作からチーム制作まで、様々な形で創作活動を行います。ジャンルは問わず、自由な発想で作品を生み出しています。',
  },
  {
    title: '作品展示',
    description: '年2回ほどの作品展では、メンバーの作品を一般公開します。来場者からの感想も励みになっています。',
  },
  {
    title: '交流イベント',
    description: '新歓イベントや親睦会を通じて、メンバー同士の絆を深めています。創作以外の時間も大切にしています。',
  },
] as const;

export default function About() {
  const { memberCount, awardsCount } = getCircleInfo();

  const detailItems = [
    {
      title: '活動場所',
      value: '福岡大学 14号館 3階',
    },
    {
      title: '活動時間',
      value: '毎週月曜日、木曜日 18:00〜20:00',
    },
    {
      title: '活動費',
      value: '今の所無し',
    },
    {
      title: 'メンバー数',
      value: `現在${memberCount.active}名 (Discordは${memberCount.discord}名以上)`,
    },
    {
      title: '受賞歴',
      value: `${awardsCount}件`,
    },
  ] as const;
  
  return (
    <div className="min-h-screen overflow-hidden bg-[var(--background)] text-primary-token">
      {/* ヒーローセクション */}
      <section className="relative border-b border-[var(--border-subtle)] py-16 md:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-12 right-[-10%] h-60 w-60 rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] blur-3xl" />
          <div className="absolute bottom-[-4rem] left-[-8%] h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--surface-hover)_78%,transparent)] blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-muted-token">Circle Overview</p>
            <h1 className="text-[clamp(3rem,10vw,6.4rem)] font-thin text-primary-token leading-[0.92] tracking-[-0.03em]">
              About
            </h1>
            <div className="mt-5 h-px w-28 bg-[color-mix(in_srgb,var(--accent)_36%,transparent)]" />
            <p className="mt-6 text-lg md:text-2xl text-secondary-token font-light max-w-3xl leading-relaxed">
              私たちの歩みと理念、そして日々の活動をコンパクトにご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 w-full max-w-sm lg:max-w-none">
            {[
              { label: 'メンバー', value: `${memberCount.active}名` },
              { label: 'Discord', value: `${memberCount.discord}名以上` },
              { label: '受賞歴', value: `${awardsCount}件` },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-raised)] px-5 py-4 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-muted-token">{item.label}</p>
                <p className="mt-2 text-2xl font-light tracking-tight text-primary-token">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 理念セクション */}
      <section className="py-20 bg-[color-mix(in_srgb,var(--surface-muted)_65%,transparent)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-muted-token">Our Principles</p>
            <h2 className="text-4xl md:text-5xl font-thin text-primary-token mb-6 tracking-tight">
              私たちの理念
            </h2>
            <p className="text-secondary-token font-light leading-relaxed">
              価値観を共有することで、初学者でも挑戦しやすい環境をつくっています。
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((item, index) => (
              <article key={item.title} className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-6 md:p-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 hover:border-[color-mix(in_srgb,var(--accent)_24%,var(--border-subtle))]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-token">0{index + 1}</p>
                <h3 className="mt-3 text-xl md:text-2xl font-medium text-primary-token tracking-tight">{item.title}</h3>
                <p className="mt-4 text-secondary-token font-light leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 歴史セクション */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-muted-token">Timeline</p>
              <h2 className="text-4xl md:text-5xl font-thin text-primary-token tracking-tight">
                サークルの歩み
              </h2>
            </div>
            <p className="max-w-md text-secondary-token font-light leading-relaxed">
              設立から現在までの変化を、要点だけ追えるように整理しています。
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative pl-6 md:pl-8">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-[color-mix(in_srgb,var(--accent)_24%,var(--border-subtle))]" />
            <div className="space-y-8 md:space-y-10">
              {timeline.map((item, index) => (
                <article key={`${item.year}-${item.title}-${index}`} className="relative group">
                  <span className="absolute -left-[1.72rem] top-6 h-3.5 w-3.5 rounded-full border border-[var(--accent)] bg-[var(--background)] md:-left-[2.2rem]" />
                  <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-6 md:p-7 transition-[transform,box-shadow,border-color] duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/5 group-hover:border-[color-mix(in_srgb,var(--accent)_24%,var(--border-subtle))]">
                    <p className="text-xs font-semibold tracking-[0.2em] text-muted-token mb-2">{item.year}</p>
                    <h3 className="text-2xl md:text-3xl font-medium text-primary-token tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-secondary-token font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 活動内容セクション */}
      <section className="py-20 bg-[color-mix(in_srgb,var(--surface-muted)_65%,transparent)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-muted-token">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-thin text-primary-token tracking-tight">
              活動内容
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((item, index) => (
              <div key={index} className="bg-[var(--surface-raised)] border border-[var(--border-subtle)] rounded-3xl p-8 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-[transform,box-shadow] duration-300">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-token">Track 0{index + 1}</p>
                <h3 className="text-2xl font-medium text-primary-token mb-6">
                  {item.title}
                </h3>
                <p className="text-secondary-token font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 詳細情報セクション */}
      <section className="py-20 border-y border-[var(--border-subtle)] bg-[var(--surface-raised)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-primary-token mb-6 tracking-tight">
              活動詳細
            </h2>
          </div>
          <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {detailItems.map((item) => (
              <div key={item.title} className="text-center lg:text-left">
                <dt className="text-sm font-medium tracking-wide text-muted-token">{item.title}</dt>
                <dd className="mt-3 text-secondary-token font-light leading-relaxed">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* メッセージセクション */}
      <section className="py-20 bg-[color-mix(in_srgb,var(--surface-muted)_65%,transparent)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-[var(--surface-raised)] border border-[var(--border-subtle)] rounded-3xl p-12">
              <p className="pointer-events-none absolute left-6 top-5 text-5xl font-thin text-[color-mix(in_srgb,var(--accent)_30%,transparent)]" aria-hidden="true">“</p>
              <p className="text-xl md:text-2xl text-secondary-token font-light leading-relaxed italic mb-8">
                「創作は一人でも楽しいものですが、仲間がいることでより深く、より広がりを持った活動になります。
                技術的な向上だけでなく、人としても成長できる場所が福大ピアプロです。
                新しい仲間をいつでもお待ちしています。」
              </p>
              <p className="text-secondary-token font-light">
                — サークル代表
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}