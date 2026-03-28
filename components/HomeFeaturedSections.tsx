'use client';

import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import type { Activity, Work } from '@/lib/api';
import CategoryBadge, { getWorkCategoryTextColorClass } from '@/components/ui/CategoryBadge';
import InteractiveMediaCard from '@/components/ui/InteractiveMediaCard';

const WorkDetailModal = dynamic(() => import('@/components/WorkDetailModal'));
const ActivityDetailModal = dynamic(() => import('@/components/ActivityDetailModal'));

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
            <h2 className="text-4xl md:text-5xl font-thin text-primary-token mb-6 tracking-tight">
              最新情報
            </h2>
            <p className="text-lg text-secondary-token font-light">
              サークルの最新活動
            </p>
          </div>

          {latestActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestActivities.map((activity) => (
                <div key={activity.id} className="group block">
                  <InteractiveMediaCard
                    image={activity.image}
                    imageAlt={activity.title}
                    imageSizes="(max-width: 768px) 100vw, 33vw"
                    imageHeightClassName="h-48"
                    onClick={() => {
                      setDetailWork(null);
                      setDetailActivity(activity);
                    }}
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
                </div>
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

      {/* 作品紹介セクション */}
      <section className="py-20 bg-[color-mix(in_srgb,var(--surface-muted)_65%,transparent)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-primary-token mb-6 tracking-tight">
              作品
            </h2>
            <p className="text-lg text-secondary-token font-light">
              メンバーが制作した代表的な作品
            </p>
          </div>

          {featuredWorks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredWorks.map((work) => (
                <div key={work.id} className="group block">
                  <InteractiveMediaCard
                    image={work.image}
                    imageAlt={work.title}
                    imageSizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    imageHeightClassName="h-56"
                    onClick={() => {
                      setDetailActivity(null);
                      setDetailWork(work);
                    }}
                    ariaLabel={`${work.title}の詳細を開く`}
                  >
                    <h3 className="text-xl font-medium text-primary-token mb-3">{work.title}</h3>
                    <p className="text-secondary-token font-light mb-4 line-clamp-3">
                      {work.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <CategoryBadge category={work.category} kind="work" size="sm" />
                      <span className={`transition-colors group-hover:text-secondary-token ${getWorkCategoryTextColorClass(work.category)}`}>→</span>
                    </div>
                  </InteractiveMediaCard>
                </div>
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

      {detailWork && <WorkDetailModal work={detailWork} onClose={() => setDetailWork(null)} />}
      {detailActivity && <ActivityDetailModal activity={detailActivity} onClose={() => setDetailActivity(null)} />}
    </>
  );
}
