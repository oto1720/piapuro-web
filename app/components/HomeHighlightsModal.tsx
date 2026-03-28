'use client';

import { useEffect, useRef, useState } from 'react';
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
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!modal) return;
    const prevOverflow = document.body.style.overflow;
    previousFocusedRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = 'hidden';

    const dialog = dialogRef.current;
    if (dialog) {
      const focusable = dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );

      if (focusable.length > 0) {
        focusable[0].focus();
      } else {
        dialog.focus();
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModal(null);
        return;
      }

      if (event.key === 'Tab' && dialog) {
        const focusable = dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );

        if (focusable.length === 0) {
          event.preventDefault();
          dialog.focus();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
      previousFocusedRef.current?.focus();
    };
  }, [modal]);

  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-28 -left-16 h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] blur-3xl" />
          <div className="absolute top-16 right-0 h-80 w-80 rounded-full bg-[color-mix(in_srgb,var(--surface-hover)_72%,transparent)] blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 md:mb-16">
            <p className="mb-4 text-xs font-semibold tracking-[0.28em] uppercase text-muted-token">Recent Activities</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin text-primary-token mb-5 tracking-tight">
              最新情報
            </h2>
            <p className="max-w-2xl text-base md:text-lg text-secondary-token font-light leading-relaxed">
              サークルの空気感が伝わる活動記録を、見やすさを保ったままダイナミックにまとめています。
            </p>
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
                  bodyClassName="p-7 md:p-8"
                  onClick={() => setModal({ type: 'activity', item: activity })}
                  ariaLabel={`${activity.title}の詳細を開く`}
                  topRightOverlay={
                    <span className="inline-flex items-center rounded-full bg-[color-mix(in_srgb,var(--surface-raised)_82%,transparent)] border border-[var(--border-subtle)] px-3 py-1 text-xs font-medium text-secondary-token backdrop-blur-sm">
                      {activity.year}
                    </span>
                  }
                >
                  <h3 className="text-xl font-medium text-primary-token mb-4 transition-colors group-hover:text-secondary-token">
                    {activity.title}
                  </h3>
                  <p className="text-secondary-token font-light leading-relaxed line-clamp-3">
                    {activity.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary-token">
                    詳細を見る
                    <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                      →
                    </span>
                  </div>
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
              className="group inline-flex items-center justify-center gap-2 tap-target bg-[var(--accent)] text-[var(--accent-contrast)] px-10 py-4 rounded-full text-lg font-medium transition-[transform,opacity] duration-300 hover:opacity-90 hover:scale-105"
            >
              すべての活動を見る
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-24 bg-[color-mix(in_srgb,var(--surface-muted)_65%,transparent)]">
        <div className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,color-mix(in_srgb,var(--border-subtle)_28%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--border-subtle)_28%,transparent)_1px,transparent_1px)] [background-size:44px_44px] opacity-45" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[color-mix(in_srgb,var(--surface-hover)_55%,transparent)] to-transparent" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 md:mb-16">
            <p className="mb-4 text-xs font-semibold tracking-[0.28em] uppercase text-muted-token">Featured Works</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin text-primary-token mb-5 tracking-tight">
              作品
            </h2>
            <p className="max-w-2xl text-base md:text-lg text-secondary-token font-light leading-relaxed">
              メンバーそれぞれの技術と表現を、ジャンルごとの個性が見える導線で紹介しています。
            </p>
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
                  bodyClassName="p-7 md:p-8"
                  onClick={() => setModal({ type: 'work', item: work })}
                  ariaLabel={`${work.title}の詳細を開く`}
                  topRightOverlay={<CategoryBadge category={work.category} kind="work" size="sm" />}
                >
                  <h3 className="text-xl font-medium text-primary-token mb-3">{work.title}</h3>
                  <p className="text-secondary-token font-light mb-4 line-clamp-3">{work.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-token">{work.year}</span>
                    <span className={`text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:text-secondary-token ${getWorkCategoryTextColorClass(work.category)}`}>→</span>
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
              className="group inline-flex items-center justify-center gap-2 tap-target bg-[var(--accent)] text-[var(--accent-contrast)] px-10 py-4 rounded-full text-lg font-medium transition-[transform,opacity] duration-300 hover:opacity-90 hover:scale-105"
            >
              すべての作品を見る
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      {modal && (
        <div
          className="fixed inset-0 z-50 bg-[color-mix(in_srgb,var(--hero-base)_58%,black)] backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label={modal.type === 'activity' ? '活動詳細' : '作品詳細'}
        >
          <div
            ref={dialogRef}
            tabIndex={-1}
            className="w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-[var(--surface-raised)] border border-[var(--border-subtle)] rounded-3xl shadow-2xl shadow-black/35"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-[color-mix(in_srgb,var(--surface-raised)_92%,transparent)] backdrop-blur-sm border-b border-[var(--border-subtle)] p-4 md:p-6 flex justify-end">
              <button
                type="button"
                onClick={() => setModal(null)}
                className="tap-target w-11 h-11 rounded-full bg-[var(--surface-muted)] text-secondary-token hover:bg-[var(--surface-hover)] transition-colors text-xl leading-none"
                aria-label="閉じる"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-[560px] bg-[var(--surface-muted)]">
                <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/30 via-transparent to-black/5" />
                {modal.item.image ? (
                  <Image
                    src={modal.item.image}
                    alt={modal.item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[var(--surface-muted)] to-[var(--surface-hover)] flex items-center justify-center">
                    <svg className="w-16 h-16 text-muted-token" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="relative p-8 md:p-12 lg:p-14">
                <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-bl-[2.5rem] bg-[color-mix(in_srgb,var(--accent)_12%,transparent)]" />
                {modal.type === 'activity' ? (
                  <>
                    <div className="flex items-center gap-3 flex-wrap mb-5">
                      <CategoryBadge category={modal.item.category} kind="activity" size="md" />
                      <span className="text-sm text-muted-token">{modal.item.year}</span>
                      <span className="text-sm text-muted-token">参加者 {modal.item.participants}名</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-thin text-primary-token mb-8 tracking-tight leading-tight">
                      {modal.item.title}
                    </h3>
                    <p className="text-secondary-token leading-relaxed whitespace-pre-wrap text-base md:text-lg">
                      {modal.item.description}
                    </p>
                    {modal.item.active && (
                      <div className="mt-10">
                        <a
                          href={modal.item.active}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center justify-center gap-2 tap-target bg-[var(--accent)] text-[var(--accent-contrast)] px-8 py-3 rounded-full text-base font-medium transition-[transform,opacity] duration-300 hover:opacity-90 hover:scale-105"
                        >
                          関連リンクを見る
                          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                            ↗
                          </span>
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
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-thin text-primary-token mb-6 tracking-tight leading-tight">
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
                    <p className="text-secondary-token leading-relaxed whitespace-pre-wrap text-base md:text-lg">
                      {modal.item.description}
                    </p>
                    {modal.item.works && (
                      <div className="mt-10">
                        <a
                          href={modal.item.works}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center justify-center gap-2 tap-target bg-[var(--accent)] text-[var(--accent-contrast)] px-8 py-3 rounded-full text-base font-medium transition-[transform,opacity] duration-300 hover:opacity-90 hover:scale-105"
                        >
                          作品リンクを見る
                          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                            ↗
                          </span>
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
