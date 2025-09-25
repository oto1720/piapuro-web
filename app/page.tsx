import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ヒーロー画像セクション */}
      <section className="relative h-[55vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/piapuro.jpg"
            alt="福岡大学プログラミングサークル"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              
            </h1>
            <p className="text-xl md:text-2xl">
            
            </p>
          </div>
        </div>
      </section>

      {/* メインコンテンツセクション */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* 左側: サークル情報 */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  福岡大学 プログラミングサークル
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  創作活動を通じて仲間と共に成長し、素敵な作品を生み出すサークルです。<br />
                  チームで作品を制作したり、ハッカソン等の外部イベントに参加しています。
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 text-center"
                >
                  サークルについて
                </Link>
                <Link
                  href="/recruit"
                  className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 text-center"
                >
                  メンバー募集
                </Link>
              </div>
            </div>

            {/* 右側: 活動内容カード */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                活動内容
              </h3>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-3">こんな活動をしています</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>・週2回の定期活動</li>
                  <li>・外部イベント参加</li>
                  <li>・ハッカソン出場</li>
                  <li>・展示会・発表会</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              最近のニュース
            </h2>
            <p className="text-gray-600">
              サークルの最新情報をお届けします
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">2024.12.20</div>
                <h3 className="text-xl font-semibold mb-3">コミックマーケット出展決定！</h3>
                <p className="text-gray-600 mb-4">
                  C105にサークル参加が決定しました。メンバーの作品集やオリジナルグッズを販売予定です。
                </p>
                <Link href="/activities" className="text-blue-600 hover:text-blue-800 font-medium">
                  詳しく見る →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">2024.12.15</div>
                <h3 className="text-xl font-semibold mb-3">冬のイラスト展開催</h3>
                <p className="text-gray-600 mb-4">
                  メンバーが制作したイラスト作品の展示会を開催しました。多くの方にご来場いただき、ありがとうございました。
                </p>
                <Link href="/activities" className="text-blue-600 hover:text-blue-800 font-medium">
                  詳しく見る →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">2024.12.01</div>
                <h3 className="text-xl font-semibold mb-3">ハッカソン最優秀賞受賞</h3>
                <p className="text-gray-600 mb-4">
                  福岡IT企業合同ハッカソンにてプログラミングチームが最優秀賞を受賞しました。
                </p>
                <Link href="/activities" className="text-blue-600 hover:text-blue-800 font-medium">
                  詳しく見る →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/activities"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              活動記録をもっと見る
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              活動実績
            </h2>
            <p className="text-gray-600">
              これまでの主な成果と実績
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">イベント参加</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5</div>
              <div className="text-gray-600">受賞歴</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">制作作品数</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">3</div>
              <div className="text-gray-600">コラボレーション</div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">主な受賞歴</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 2024年 福岡IT企業合同ハッカソン 最優秀賞</li>
                <li>• 2024年 九州学生音楽コンテスト 準優勝</li>
                <li>• 2023年 福岡大学文化祭 優秀賞</li>
                <li>• 2023年 学生クリエイター展 入選</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">参加イベント</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• コミックマーケット (年2回)</li>
                <li>• 福岡大学文化祭 (毎年)</li>
                <li>• 九州クリエイターフェス</li>
                <li>• 学生向けハッカソン各種</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              作品紹介
            </h2>
            <p className="text-gray-600">
              メンバーが制作した代表的な作品をご紹介
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">青春ソング集</h3>
                <p className="text-gray-600 mb-4">メンバーが作詞作曲した青春をテーマにしたオリジナル楽曲集</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-600 font-medium">音楽</span>
                  <Link href="/works" className="text-blue-600 hover:text-blue-800">
                    詳細 →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">キャラクターイラスト集</h3>
                <p className="text-gray-600 mb-4">オリジナルキャラクターを中心としたイラスト作品集</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-600 font-medium">イラスト</span>
                  <Link href="/works" className="text-blue-600 hover:text-blue-800">
                    詳細 →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">短編アニメーション</h3>
                <p className="text-gray-600 mb-4">学生生活をテーマにした3分間の短編アニメーション作品</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-purple-600 font-medium">動画</span>
                  <Link href="/works" className="text-blue-600 hover:text-blue-800">
                    詳細 →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">学習支援アプリ</h3>
                <p className="text-gray-600 mb-4">学生向けのタスク管理と学習記録ができるWebアプリケーション</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-orange-600 font-medium">プログラミング</span>
                  <Link href="/works" className="text-blue-600 hover:text-blue-800">
                    詳細 →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-green-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">プロモーションMV</h3>
                <p className="text-gray-600 mb-4">サークルの活動を紹介するミュージックビデオ</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-teal-600 font-medium">動画</span>
                  <Link href="/works" className="text-blue-600 hover:text-blue-800">
                    詳細 →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">ゲーム制作</h3>
                <p className="text-gray-600 mb-4">2Dパズルゲーム「Color Quest」- ハッカソン受賞作品</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-indigo-600 font-medium">ゲーム</span>
                  <Link href="/works" className="text-blue-600 hover:text-blue-800">
                    詳細 →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/works"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              作品をもっと見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
