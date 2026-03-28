'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Activity, Work } from '@/lib/api';
import CategoryBadge, { getWorkCategoryTextColorClass } from '@/components/ui/CategoryBadge';
import InteractiveMediaCard from '@/components/ui/InteractiveMediaCard';

interface HomeHighlightsModalProps {
  latestActivities: Activity[];
  featuredWorks: Work[];
}

type ModalState =
  | { type: 'activity'; item: Activity }
  | { type: 'work'; item: Work }
  | null;

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
            <h2 className="text-4xl md:text-5xl font-thin text-primary-token mb-6 tracking-tight">
              最新情報
            </h2>
            <p className="text-lg text-secondary-token font-light">サークルの最新活動</p>
          </div>

          {latestActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestActivities.map((activity) => (
                <InteractiveMediaCard
                  key={activity.id}
                  image={activity.image}
                  imageAlt={activity.title}
                  imageSizes="(max-width: 768px) 100vw, 33vw"
                  imageHeightClassName="h-48"
                  onClick={() => setModal({ type: 'activity', item: activity })}
                  ariaLabel={`${activity.title}の詳細を開く`}
                >
                  <div className="text-sm text-muted-token font-light mb-3">{activity.year}</div>
                  <h3 className="text-xl font-medium text-primary-token mb-4 transition-colors group-hover:text-secondary-token">
                    {activity.title}
                  </h3>
                  <p className="text-secondary-token font-light leading-relaxed line-clamp-3">
                    {activity.description}
                  </p>
                </InteractiveMediaCard>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-token font-light">最新情報はまだありません。</p>
            </div>
          )}

          <div className="text-center mt-16">
            <Link
              href="/activities"
              className="inline-flex items-center justify-center tap-target bg-[var(--accent)] text-[var(--accent-contrast)] px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:opacity-90 hover:scale-105"
            >
              すべての活動を見る
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[color-mix(in_srgb,var(--surface-muted)_65%,transparent)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-primary-token mb-6 tracking-tight">
              作品
            </h2>
            <p className="text-lg text-secondary-token font-light">メンバーが制作した代表的な作品</p>
          </div>

          {featuredWorks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredWorks.map((work) => (
                <InteractiveMediaCard
                  key={work.id}
                  image={work.image}
                  imageAlt={work.title}
                  imageSizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  imageHeightClassName="h-56"
                  onClick={() => setModal({ type: 'work', item: work })}
                  ariaLabel={`${work.title}の詳細を開く`}
                >
                  <h3 className="text-xl font-medium text-primary-token mb-3">{work.title}</h3>
                  <p className="text-secondary-token font-light mb-4 line-clamp-3">{work.description}</p>
                  <div className="flex justify-between items-center">
                    <CategoryBadge category={work.category} kind="work" size="sm" />
                    <span className={`transition-colors group-hover:text-secondary-token ${getWorkCategoryTextColorClass(work.category)}`}>→</span>
                  </div>
                </InteractiveMediaCard>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-token font-light">表示できる作品がまだありません。</p>
            </div>
          )}

          <div className="text-center mt-16">
            <Link
              href="/works"
              className="inline-flex items-center justify-center tap-target bg-[var(--accent)] text-[var(--accent-contrast)] px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:opacity-90 hover:scale-105"
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
            className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[var(--surface-raised)] border border-[var(--border-subtle)] rounded-3xl shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-[color-mix(in_srgb,var(--surface-raised)_90%,transparent)] backdrop-blur-sm border-b border-[var(--border-subtle)] p-4 md:p-6 flex justify-end">
              <button
                type="button"
                onClick={() => setModal(null)}
                className="tap-target w-11 h-11 rounded-full bg-[var(--surface-muted)] text-secondary-token hover:bg-[var(--surface-hover)] transition-colors"
                aria-label="閉じる"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-[520px] bg-[var(--surface-muted)]">
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
                  <div className="w-full h-full bg-gradient-to-br from-[var(--surface-muted)] to-[var(--surface-hover)] flex items-center justify-center">
                    <svg className="w-16 h-16 text-muted-token" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="p-8 md:p-12">
                {modal.type === 'activity' ? (
                  <>
                    <div className="flex items-center gap-3 flex-wrap mb-5">
                      <CategoryBadge category={modal.item.category} kind="activity" size="md" />
                      <span className="text-sm text-muted-token">{modal.item.year}</span>
                      <span className="text-sm text-muted-token">参加者 {modal.item.participants}名</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-thin text-primary-token mb-8 tracking-tight">
                      {modal.item.title}
                    </h3>
                    <p className="text-secondary-token leading-relaxed whitespace-pre-wrap">
                      {modal.item.description}
                    </p>
                    {modal.item.active && (
                      <div className="mt-10">
                        <a
                          href={modal.item.active}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center tap-target bg-[var(--accent)] text-[var(--accent-contrast)] px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:opacity-90 hover:scale-105"
                        >
                          関連リンクを見る
                        </a>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3 flex-wrap mb-5">
                      <CategoryBadge category={modal.item.category} kind="work" size="md" />
                      <span className="text-sm text-muted-token">{modal.item.year}</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-thin text-primary-token mb-6 tracking-tight">
                      {modal.item.title}
                    </h3>
                    <p className="text-base md:text-lg text-secondary-token font-light mb-3">
                      作者: {modal.item.artist}
                    </p>
                    {modal.item.technology && (
                      <p className="text-base md:text-lg text-secondary-token font-light mb-8">
                        技術: {modal.item.technology}
                      </p>
                    )}
                    <p className="text-secondary-token leading-relaxed whitespace-pre-wrap">
                      {modal.item.description}
                    </p>
                    {modal.item.works && (
                      <div className="mt-10">
                        <a
                          href={modal.item.works}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center tap-target bg-[var(--accent)] text-[var(--accent-contrast)] px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:opacity-90 hover:scale-105"
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
