'use client';
import { useState } from 'react';

const works = [
  {
    id: 1,
    title: "夕日の風景",
    artist: "田中 美咲",
    category: "イラスト",
    year: "2024",
    description: "故郷の夕日を描いた水彩画です。温かみのある色彩で表現しました。",
    image: "/placeholder-image.jpg"
  },
  {
    id: 2,
    title: "春のメロディー",
    artist: "佐藤 健太",
    category: "音楽",
    year: "2024",
    description: "桜をテーマにしたピアノ曲です。穏やかな春の午後をイメージして作曲しました。",
    image: "/placeholder-music.jpg"
  },
  {
    id: 3,
    title: "星空の物語",
    artist: "山田 花子",
    category: "小説",
    year: "2023",
    description: "天体観測をする少女の成長を描いた短編小説です。夢と現実の境界を探ります。",
    image: "/placeholder-book.jpg"
  },
  {
    id: 4,
    title: "都市の記憶",
    artist: "鈴木 太郎",
    category: "写真",
    year: "2024",
    description: "変わりゆく街並みを記録したフォトエッセイ。時間の流れを写真で表現しています。",
    image: "/placeholder-photo.jpg"
  },
  {
    id: 5,
    title: "未来への扉",
    artist: "高橋 由美",
    category: "イラスト",
    year: "2024",
    description: "デジタルペインティングで描いたSF作品。希望に満ちた未来を表現しました。",
    image: "/placeholder-digital.jpg"
  },
  {
    id: 6,
    title: "雨音のワルツ",
    artist: "伊藤 誠",
    category: "音楽",
    year: "2023",
    description: "雨の日の静寂をテーマにした楽曲。ピアノとバイオリンの美しい調和をお楽しみください。",
    image: "/placeholder-music2.jpg"
  }
];

const categories = ["すべて", "イラスト", "音楽", "小説", "写真"];

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");

  const filteredWorks = selectedCategory === "すべて"
    ? works
    : works.filter(work => work.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            作品一覧
          </h1>
          <p className="text-xl text-gray-700">
            メンバーが心を込めて制作した作品をご紹介します
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work) => (
              <div key={work.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    {work.category === "音楽" && (
                      <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    )}
                    {work.category === "イラスト" && (
                      <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                    {work.category === "小説" && (
                      <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                    {work.category === "写真" && (
                      <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      work.category === 'イラスト' ? 'bg-blue-100 text-blue-800' :
                      work.category === '音楽' ? 'bg-green-100 text-green-800' :
                      work.category === '小説' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {work.category}
                    </span>
                    <span className="text-sm text-gray-500">{work.year}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {work.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3">
                    作者: {work.artist}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredWorks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                選択されたカテゴリーの作品はありません。
              </p>
            </div>
          )}

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              作品の詳細や実際の展示については、お気軽にお問い合わせください。
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}