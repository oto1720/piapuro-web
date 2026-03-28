import Link from 'next/link';
import Image from 'next/image';
import { getActivitiesFromGAS, getWorksFromGAS } from '@/lib/api';
import { HomeFeaturedSections } from '@/components/HomeFeaturedSections';
import { getCircleInfo } from '@/lib/data';

export default async function Home() {
  const [works, activities] = await Promise.all([
    getWorksFromGAS(),
    getActivitiesFromGAS(),
  ]);
  const featuredWorks = works.slice(0, 3);
  const latestActivities = activities.slice(0, 3);

  const eventsCount = activities.length;
  const worksCount = works.length;
  const { memberCount, awardsCount } = getCircleInfo();

  return (
    <div className="min-h-screen bg-[var(--background)] text-primary-token">
      {/* ヒーロー画像セクション */}
      <section className="relative h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden bg-[var(--hero-base)]">
        <div className="absolute inset-0">
          <Image
            src="/piapuro.jpg"
            alt="福大ピアプロの活動風景"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, var(--hero-overlay-top), var(--hero-overlay-mid), var(--hero-overlay-bottom))`,
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-[var(--hero-text)] px-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin mb-6 tracking-tight">
              福大ピアプロ
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light opacity-90 mb-12 tracking-wide">
              {/* 創造力と技術で未来を描く */}
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
              <Link
                href="/about"
                className="tap-target inline-flex items-center justify-center bg-[var(--hero-chip-bg)] backdrop-blur-md border border-[var(--hero-chip-border)] text-[var(--hero-text)] px-8 py-4 rounded-full text-lg font-medium transition-[transform,opacity,background-color] duration-300 hover:bg-[var(--hero-chip-hover)] hover:scale-105"
              >
                サークルについて
              </Link>
              <Link
                href="/recruit"
                className="tap-target inline-flex items-center justify-center bg-[var(--info-cta)] text-[var(--accent-contrast)] px-8 py-4 rounded-full text-lg font-medium transition-[transform,background-color,opacity] duration-300 hover:bg-[var(--info-cta-hover)] hover:scale-105"
              >
                メンバー募集
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* サークル紹介セクション */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-thin text-primary-token mb-6 tracking-tight">
              福岡大学<br />プログラミングサークル
            </h2>
            <p className="text-xl md:text-2xl text-secondary-token font-light max-w-3xl mx-auto leading-relaxed">
              創作活動を通じて仲間と共に成長し、素敵な作品を生み出すサークルです。
              チームで作品を制作したり、ハッカソン等の外部イベントに参加しています。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-20 max-w-4xl mx-auto items-start">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-[var(--surface-muted)] rounded-3xl flex items-center justify-center mx-auto mb-6 border border-[var(--border-subtle)]">
                <div
                  className="w-12 h-12 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, var(--hero-icon-primary-from), var(--hero-icon-primary-to))',
                  }}
                ></div>
              </div>
              <h3 className="text-2xl font-medium text-primary-token mb-4">プログラミング</h3>
              <p className="text-secondary-token font-light leading-relaxed">
                Webアプリ、ゲーム開発、ハッカソン参加、モバイルアプリ、コンテスト参加
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-[var(--surface-muted)] rounded-3xl flex items-center justify-center mx-auto mb-6 border border-[var(--border-subtle)]">
                <div
                  className="w-12 h-12 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, var(--hero-icon-secondary-from), var(--hero-icon-secondary-to))',
                  }}
                ></div>
              </div>
              <h3 className="text-2xl font-medium text-primary-token mb-4">コンテンツ</h3>
              <p className="text-secondary-token font-light leading-relaxed">
                LT会、展示会、交流会
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 実績セクション */}
      <section className="py-20 bg-[color-mix(in_srgb,var(--surface-muted)_65%,transparent)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-primary-token mb-6 tracking-tight">
              実績
            </h2>
            <p className="text-lg text-secondary-token font-light">
              これまでの活動成果
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center rounded-2xl p-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-thin text-primary-token mb-2">{eventsCount}</div>
              <div className="text-secondary-token font-light">イベント参加</div>
            </div>
            <div className="text-center rounded-2xl p-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-thin text-primary-token mb-2">{awardsCount}</div>
              <div className="text-secondary-token font-light">受賞歴</div>
            </div>
            <div className="text-center rounded-2xl p-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-thin text-primary-token mb-2">{worksCount}</div>
              <div className="text-secondary-token font-light">制作作品数</div>
            </div>
            <div className="text-center rounded-2xl p-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-thin text-primary-token mb-2">{memberCount.active}</div>
              <div className="text-secondary-token font-light">メンバー数</div>
            </div>
          </div>
        </div>
      </section>

      <HomeFeaturedSections featuredWorks={featuredWorks} latestActivities={latestActivities} />
    </div>
  );
}
