'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Activity, Work } from '@/lib/api';
import WorkDetailModal from '@/components/WorkDetailModal';
import ActivityDetailModal from '@/components/ActivityDetailModal';

function getWorkCategoryColorClass(category: string) {
  if (category === 'モバイルアプリ') return 'text-blue-600';
  if (category === 'Webアプリ') return 'text-green-600';
  if (category === 'ゲーム') return 'text-purple-600';
  if (category === 'イラスト') return 'text-pink-600';
  return 'text-gray-600';
}

interface HomeFeaturedSectionsProps {
  featuredWorks: Work[];
  latestActivities: Activity[];
}

export function HomeFeaturedSections({ featuredWorks, latestActivities }: HomeFeaturedSectionsProps) {
  const [detailWork, setDetailWork] = useState<Work | null>(null);
  const [detailActivity, setDetailActivity] = useState<Activity | null>(null);

  return (
    <>
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

          {latestActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestActivities.map((activity) => (
                <div key={activity.id} className="group block">
                  <button
                    type="button"
                    onClick={() => {
                      setDetailWork(null);
                      setDetailActivity(activity);
                    }}
                    className="w-full text-left bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="h-48 relative overflow-hidden bg-gray-100">
                      {activity.image ? (
                        <Image
                          src={activity.image}
                          alt={activity.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="p-8">
                      <div className="text-sm text-gray-500 font-light mb-3">{activity.year}</div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4 transition-colors group-hover:text-gray-700">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed line-clamp-3">
                        {activity.description}
                      </p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500 font-light">最新情報はまだありません。</p>
            </div>
          )}

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

          {featuredWorks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredWorks.map((work) => (
                <div key={work.id} className="group block">
                  <button
                    type="button"
                    onClick={() => {
                      setDetailActivity(null);
                      setDetailWork(work);
                    }}
                    className="w-full text-left bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="h-56 relative overflow-hidden bg-gray-100">
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
                          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-medium text-gray-900 mb-3">{work.title}</h3>
                      <p className="text-gray-600 font-light mb-4 line-clamp-3">
                        {work.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className={`text-sm font-medium ${getWorkCategoryColorClass(work.category)}`}>{work.category}</span>
                        <span className="text-gray-400 transition-colors group-hover:text-gray-600">→</span>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500 font-light">表示できる作品がまだありません。</p>
            </div>
          )}

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

      <WorkDetailModal work={detailWork} onClose={() => setDetailWork(null)} />
      <ActivityDetailModal activity={detailActivity} onClose={() => setDetailActivity(null)} />
    </>
  );
}
