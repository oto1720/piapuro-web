'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Work } from '@/lib/api';
import WorkDetailModal from '@/components/WorkDetailModal';

const categories = ["すべて", "モバイルアプリ", "Webアプリ", "ゲーム", "イラスト", "他"];

interface WorksClientProps {
  initialWorks: Work[];
}

export default function WorksClient({ initialWorks }: WorksClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [detailWork, setDetailWork] = useState<Work | null>(null);

  const filteredWorks = selectedCategory === "すべて"
    ? initialWorks
    : initialWorks.filter(work => work.category === selectedCategory);

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
                className={`min-h-11 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
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
              <div key={work.id} className="relative z-0 transition-all duration-300">
                <button
                  type="button"
                  className="bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2"
                  onClick={() => setDetailWork(work)}
                  aria-label={`${work.title}の詳細を開く`}
                >
                  <div className="h-64 relative overflow-hidden bg-gray-100 pointer-events-none">
                    {work.image ? (
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute top-6 right-6">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                        {work.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-4 flex items-center gap-2 flex-wrap">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        work.category === 'モバイルアプリ' ? 'bg-blue-50 text-blue-700' :
                        work.category === 'Webアプリ' ? 'bg-green-50 text-green-700' :
                        work.category === 'ゲーム' ? 'bg-purple-50 text-purple-700' :
                        work.category === 'イラスト' ? 'bg-pink-50 text-pink-700' :
                        work.category === '他' ? 'bg-orange-50 text-orange-700' :
                        'bg-gray-50 text-gray-700'
                      }`}>
                        {work.category}
                      </span>
                      {work.technology && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600">
                          {work.technology}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-medium text-gray-900 mb-3">
                      {work.title}
                    </h3>

                    <p className="text-gray-600 font-light mb-4">
                      作者: {work.artist}
                    </p>

                    <p className="text-gray-600 font-light leading-relaxed line-clamp-3">
                      {work.description}
                    </p>
                  </div>
                </button>
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

      <WorkDetailModal work={detailWork} onClose={() => setDetailWork(null)} />
    </div>
  );
}
