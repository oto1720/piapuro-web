'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Activity, Work } from '@/lib/api';

interface HomeHighlightsModalProps {
  latestActivities: Activity[];
  featuredWorks: Work[];
}

type ModalState =
  | { type: 'activity'; item: Activity }
  | { type: 'work'; item: Work }
  | null;

function getWorkCategoryColorClass(category: string) {
  if (category === 'モバイルアプリ') return 'text-blue-600';
  if (category === 'Webアプリ') return 'text-green-600';
  if (category === 'ゲーム') return 'text-purple-600';
  if (category === 'イラスト') return 'text-pink-600';
  return 'text-gray-600';
}

export default function HomeHighlightsModal({
  latestActivities,
  featuredWorks,
}: HomeHighlightsModalProps) {
  const [modal, setModal] = useState<ModalState>(null);

  useEffect(() => {
    if (!modal) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModal(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modal]);

  return (
    <>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              最新情報
            </h2>
            <p className="text-lg text-gray-600 font-light">サークルの最新活動</p>
          </div>

          {latestActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestActivities.map((activity) => (
                <button
                  key={activity.id}
                  type="button"
                  onClick={() => setModal({ type: 'activity', item: activity })}
                  className="group block text-left"
                >
                  <article className="bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2">
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
                  </article>
                </button>
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

      <section className="py-20 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              作品
            </h2>
            <p className="text-lg text-gray-600 font-light">メンバーが制作した代表的な作品</p>
          </div>

          {featuredWorks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredWorks.map((work) => (
                <button
                  key={work.id}
                  type="button"
                  onClick={() => setModal({ type: 'work', item: work })}
                  className="group block text-left"
                >
                  <article className="bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2">
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
                      <p className="text-gray-600 font-light mb-4 line-clamp-3">{work.description}</p>
                      <div className="flex justify-between items-center">
                        <span className={`text-sm font-medium ${getWorkCategoryColorClass(work.category)}`}>{work.category}</span>
                        <span className="text-gray-400 transition-colors group-hover:text-gray-600">→</span>
                      </div>
                    </div>
                  </article>
                </button>
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

      {modal && (
        <div
          className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label={modal.type === 'activity' ? '活動詳細' : '作品詳細'}
        >
          <div
            className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white border border-gray-100 rounded-3xl shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-100 p-4 md:p-6 flex justify-end">
              <button
                type="button"
                onClick={() => setModal(null)}
                className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                aria-label="閉じる"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-[520px] bg-gray-100">
                {modal.item.image ? (
                  <Image
                    src={modal.item.image}
                    alt={modal.item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="p-8 md:p-12">
                {modal.type === 'activity' ? (
                  <>
                    <div className="flex items-center gap-3 flex-wrap mb-5">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                        {modal.item.category}
                      </span>
                      <span className="text-sm text-gray-500">{modal.item.year}</span>
                      <span className="text-sm text-gray-500">参加者 {modal.item.participants}名</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-thin text-gray-900 mb-8 tracking-tight">
                      {modal.item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {modal.item.description}
                    </p>
                    {modal.item.active && (
                      <div className="mt-10">
                        <a
                          href={modal.item.active}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105"
                        >
                          関連リンクを見る
                        </a>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3 flex-wrap mb-5">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                        {modal.item.category}
                      </span>
                      <span className="text-sm text-gray-500">{modal.item.year}</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
                      {modal.item.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 font-light mb-3">
                      作者: {modal.item.artist}
                    </p>
                    {modal.item.technology && (
                      <p className="text-base md:text-lg text-gray-600 font-light mb-8">
                        技術: {modal.item.technology}
                      </p>
                    )}
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {modal.item.description}
                    </p>
                    {modal.item.works && (
                      <div className="mt-10">
                        <a
                          href={modal.item.works}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105"
                        >
                          作品リンクを見る
                        </a>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
