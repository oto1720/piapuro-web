import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              工事中
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-2">
              福岡大学 プログラミングサークル
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            創作活動を通じて仲間と共に成長し、素敵な作品を生み出すサークルです。<br />
            チームで作品を制作したり、ハッカソン等の外部イベントに参加しています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              サークルについて
            </Link>
            <Link
              href="/recruit"
              className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              メンバー募集
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            活動内容
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">音楽制作</h3>
              <p className="text-gray-600">
                DTM、作詞作曲、演奏動画の制作を行っています。
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">イラスト制作</h3>
              <p className="text-gray-600">
                デジタルイラスト、キャラクターデザイン、アニメーション制作。
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">動画制作</h3>
              <p className="text-gray-600">
                MV制作、ゲーム実況、Vlog、プロモーション動画の制作。
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">プログラミング</h3>
              <p className="text-gray-600">
                Webアプリ、ゲーム開発、ツール制作、ハッカソン参加。
              </p>
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
