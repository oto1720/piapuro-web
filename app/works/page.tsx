'use client';
import { useState } from 'react';
import Link from 'next/link';

const works = [
  {
    id: 1,
    title: "夕日の風景",
    artist: "田中 美咲",
    category: "イラスト",
    year: "2024",
    description: "故郷の夕日を描いた水彩画です。温かみのある色彩で表現しました。",
    color: "from-orange-400 to-red-500"
  },
  {
    id: 2,
    title: "春のメロディー",
    artist: "佐藤 健太",
    category: "音楽",
    year: "2024",
    description: "桜をテーマにしたピアノ曲です。穏やかな春の午後をイメージして作曲しました。",
    color: "from-pink-400 to-rose-500"
  },
  {
    id: 3,
    title: "星空の物語",
    artist: "山田 花子",
    category: "小説",
    year: "2023",
    description: "天体観測をする少女の成長を描いた短編小説です。夢と現実の境界を探ります。",
    color: "from-purple-400 to-indigo-500"
  },
  {
    id: 4,
    title: "都市の記憶",
    artist: "鈴木 太郎",
    category: "写真",
    year: "2024",
    description: "変わりゆく街並みを記録したフォトエッセイ。時間の流れを写真で表現しています。",
    color: "from-gray-400 to-slate-500"
  },
  {
    id: 5,
    title: "未来への扉",
    artist: "高橋 由美",
    category: "イラスト",
    year: "2024",
    description: "デジタルペインティングで描いたSF作品。希望に満ちた未来を表現しました。",
    color: "from-blue-400 to-cyan-500"
  },
  {
    id: 6,
    title: "雨音のワルツ",
    artist: "伊藤 誠",
    category: "音楽",
    year: "2023",
    description: "雨の日の静寂をテーマにした楽曲。ピアノとバイオリンの美しい調和をお楽しみください。",
    color: "from-teal-400 to-green-500"
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
      {/* ヒーローセクション */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-gray-900 mb-8 tracking-tight">
            Works
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            メンバーが制作した作品一覧
          </p>
        </div>
      </section>

      {/* カテゴリフィルター */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 作品グリッド */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work) => (
              <div key={work.id} className="group cursor-pointer">
                <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2">
                  <div className={`h-64 bg-gradient-to-br ${work.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-6 right-6">
                      <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
                        {work.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        work.category === 'イラスト' ? 'bg-blue-50 text-blue-700' :
                        work.category === '音楽' ? 'bg-green-50 text-green-700' :
                        work.category === '小説' ? 'bg-purple-50 text-purple-700' :
                        'bg-gray-50 text-gray-700'
                      }`}>
                        {work.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-medium text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                      {work.title}
                    </h3>

                    <p className="text-gray-600 font-light mb-4">
                      作者: {work.artist}
                    </p>

                    <p className="text-gray-600 font-light leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredWorks.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-gray-500 font-light">
                選択されたカテゴリーの作品はありません。
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-8 tracking-tight">
              作品について
            </h2>
            <p className="text-lg text-gray-600 font-light mb-12 leading-relaxed">
              作品の詳細や実際の展示については、お気軽にお問い合わせください。<br />
              また、あなたも私たちと一緒に創作活動を始めませんか？
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105"
              >
                お問い合わせ
              </Link>
              <Link
                href="/recruit"
                className="inline-block bg-white border border-gray-300 text-gray-900 px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105"
              >
                メンバー募集
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}