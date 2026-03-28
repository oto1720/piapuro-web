'use client';
import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Work } from '@/lib/api';
import CategoryFilterChips from '@/components/ui/CategoryFilterChips';
import CategoryBadge from '@/components/ui/CategoryBadge';
import InteractiveMediaCard from '@/components/ui/InteractiveMediaCard';

const WorkDetailModal = dynamic(() => import('@/components/WorkDetailModal'));

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
    <div className="min-h-screen bg-[var(--background)] text-primary-token">
      {/* ヒーローセクション */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-primary-token mb-8 tracking-tight">
            Works
          </h1>
          <p className="text-xl md:text-2xl text-secondary-token font-light max-w-3xl mx-auto leading-relaxed">
            メンバーが制作した作品一覧
          </p>
        </div>
      </section>

      {/* カテゴリフィルター */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <CategoryFilterChips
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      </section>

      {/* 作品グリッド */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work) => (
              <div key={work.id} className="relative z-0">
                <InteractiveMediaCard
                  image={work.image}
                  imageAlt={work.title}
                  imageSizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  imageHeightClassName="h-64"
                  onClick={() => setDetailWork(work)}
                  ariaLabel={`${work.title}の詳細を開く`}
                  topRightOverlay={
                    <span className="bg-[color-mix(in_srgb,var(--surface-raised)_80%,transparent)] backdrop-blur-sm text-primary-token px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      {work.year}
                    </span>
                  }
                >
                  <div className="mb-4 flex items-center gap-2 flex-wrap">
                    <CategoryBadge category={work.category} kind="work" size="sm" />
                    {work.technology && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface-muted)] text-secondary-token">
                        {work.technology}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-medium text-primary-token mb-3">
                    {work.title}
                  </h3>

                  <p className="text-secondary-token font-light mb-4">
                    作者: {work.artist}
                  </p>

                  <p className="text-secondary-token font-light leading-relaxed line-clamp-3">
                    {work.description}
                  </p>
                </InteractiveMediaCard>
              </div>
            ))}
          </div>

          {filteredWorks.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-token font-light">
                選択されたカテゴリーの作品はありません。
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-[color-mix(in_srgb,var(--surface-muted)_65%,transparent)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-thin text-primary-token mb-8 tracking-tight">
              作品について
            </h2>
            <p className="text-lg text-secondary-token font-light mb-12 leading-relaxed">
              作品の詳細や実際の展示については、お気軽にお問い合わせください。<br />
              また、あなたも私たちと一緒に創作活動を始めませんか？
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center tap-target bg-[var(--accent)] text-[var(--accent-contrast)] px-10 py-4 rounded-full text-lg font-medium transition-[transform,opacity] duration-300 hover:opacity-90 hover:scale-105"
              >
                お問い合わせ
              </Link>
              <Link
                href="/recruit"
                className="inline-flex items-center justify-center tap-target bg-[var(--surface-raised)] border border-[var(--border-subtle)] text-primary-token px-10 py-4 rounded-full text-lg font-medium transition-[transform,background-color] duration-300 hover:bg-[var(--surface-muted)] hover:scale-105"
              >
                メンバー募集
              </Link>
            </div>
          </div>
        </div>
      </section>

      {detailWork && <WorkDetailModal work={detailWork} onClose={() => setDetailWork(null)} />}
    </div>
  );
}
