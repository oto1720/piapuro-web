import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーロー画像セクション */}
      <section className="relative h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/piapuro.jpg"
            alt="福岡大学プログラミングサークル"
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
              創造力と技術で未来を描く
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl"></div>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">プログラミング</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Webアプリ、ゲーム開発、ツール制作、ハッカソン参加
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl"></div>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">デザイン</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                UI/UXデザイン、イラスト制作、アニメーション
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl"></div>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">コンテンツ</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                動画制作、音楽制作、Webコンテンツ作成
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
              <div className="text-5xl md:text-6xl font-thin text-gray-900 mb-2">15+</div>
              <div className="text-gray-600 font-light">イベント参加</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-thin text-gray-900 mb-2">5</div>
              <div className="text-gray-600 font-light">受賞歴</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-thin text-gray-900 mb-2">100+</div>
              <div className="text-gray-600 font-light">制作作品数</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-thin text-gray-900 mb-2">45</div>
              <div className="text-gray-600 font-light">メンバー数</div>
            </div>
          </div>
        </div>
      </section>

      {/* ニュースセクション */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              最新情報
            </h2>
            <p className="text-lg text-gray-600 font-light">
              サークルの最新活動
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group cursor-pointer">
              <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600"></div>
                <div className="p-8">
                  <div className="text-sm text-gray-500 font-light mb-3">2024.12.20</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    コミックマーケット出展決定
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    C105にサークル参加が決定しました。メンバーの作品集やオリジナルグッズを販売予定です。
                  </p>
                </div>
              </div>
            </article>

            <article className="group cursor-pointer">
              <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-green-500 to-green-600"></div>
                <div className="p-8">
                  <div className="text-sm text-gray-500 font-light mb-3">2024.12.15</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    冬のイラスト展開催
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    メンバーが制作したイラスト作品の展示会を開催しました。多くの方にご来場いただきました。
                  </p>
                </div>
              </div>
            </article>

            <article className="group cursor-pointer">
              <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600"></div>
                <div className="p-8">
                  <div className="text-sm text-gray-500 font-light mb-3">2024.12.01</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    ハッカソン最優秀賞受賞
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    福岡IT企業合同ハッカソンにてプログラミングチームが最優秀賞を受賞しました。
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/activities"
              className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105"
            >
              すべての活動を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 作品紹介セクション */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              作品
            </h2>
            <p className="text-lg text-gray-600 font-light">
              メンバーが制作した代表的な作品
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2">
                <div className="h-56 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-8">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">青春ソング集</h3>
                  <p className="text-gray-600 font-light mb-4">
                    メンバーが作詞作曲した青春をテーマにしたオリジナル楽曲集
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-600 font-medium">音楽</span>
                    <span className="text-gray-400 group-hover:text-gray-600 transition-colors">→</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2">
                <div className="h-56 bg-gradient-to-br from-green-400 to-blue-500"></div>
                <div className="p-8">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">学習支援アプリ</h3>
                  <p className="text-gray-600 font-light mb-4">
                    学生向けのタスク管理と学習記録ができるWebアプリケーション
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-green-600 font-medium">プログラミング</span>
                    <span className="text-gray-400 group-hover:text-gray-600 transition-colors">→</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2">
                <div className="h-56 bg-gradient-to-br from-purple-400 to-pink-500"></div>
                <div className="p-8">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">短編アニメーション</h3>
                  <p className="text-gray-600 font-light mb-4">
                    学生生活をテーマにした3分間の短編アニメーション作品
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-purple-600 font-medium">動画</span>
                    <span className="text-gray-400 group-hover:text-gray-600 transition-colors">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/works"
              className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105"
            >
              すべての作品を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}