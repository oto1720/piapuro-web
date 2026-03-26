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
    <div className="min-h-screen bg-white">
      {/* ヒーロー画像セクション */}
      <section className="relative h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/piapuro.jpg"
            alt=""
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin mb-6 tracking-tight">
              福大ピアプロ
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light opacity-90 mb-12 tracking-wide">
              {/* 創造力と技術で未来を描く */}
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
              <Link
                href="/about"
                className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                サークルについて
              </Link>
              <Link
                href="/recruit"
                className="inline-block bg-blue-600/90 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:scale-105"
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
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-thin text-gray-900 mb-6 tracking-tight">
              福岡大学<br />プログラミングサークル
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              創作活動を通じて仲間と共に成長し、素敵な作品を生み出すサークルです。
              チームで作品を制作したり、ハッカソン等の外部イベントに参加しています。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-20 max-w-4xl mx-auto items-start">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl"></div>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">プログラミング</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Webアプリ、ゲーム開発、ハッカソン参加、モバイルアプリ、コンテスト参加
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl"></div>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">コンテンツ</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                LT会、展示会、交流会
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 実績セクション */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              実績
            </h2>
            <p className="text-lg text-gray-600 font-light">
              これまでの活動成果
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-thin text-gray-900 mb-2">{eventsCount}</div>
              <div className="text-gray-600 font-light">イベント参加</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-thin text-gray-900 mb-2">{awardsCount}</div>
              <div className="text-gray-600 font-light">受賞歴</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-thin text-gray-900 mb-2">{worksCount}</div>
              <div className="text-gray-600 font-light">制作作品数</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-thin text-gray-900 mb-2">{memberCount.active}</div>
              <div className="text-gray-600 font-light">メンバー数</div>
            </div>
          </div>
        </div>
      </section>

      <HomeFeaturedSections featuredWorks={featuredWorks} latestActivities={latestActivities} />
    </div>
  );
}
