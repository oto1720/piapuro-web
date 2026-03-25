'use client';

import Image from 'next/image';
import { hasExternalLink, type Activity } from '@/lib/api';

export function ActivityDetailView({ activity }: { activity: Activity }) {
  return (
    <article className="flex flex-col bg-white lg:flex-row lg:items-start">
      <div className="relative h-64 shrink-0 bg-gray-100 lg:sticky lg:top-0 lg:z-0 lg:h-[min(90dvh,900px)] lg:w-1/2 lg:shrink-0 lg:self-start">
        {activity.image ? (
          <Image
            src={activity.image}
            alt={activity.title}
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

      <div className="min-w-0 flex-1 p-8 pb-10 pt-8 md:p-12 md:pb-12 lg:p-14 lg:pb-16">
        <div className="flex items-center gap-3 flex-wrap mb-5">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
            {activity.category}
          </span>
          <span className="text-sm text-gray-500">{activity.year}</span>
          <span className="text-sm text-gray-500">参加者 {activity.participants}名</span>
        </div>

        <h1
          id="activity-detail-title"
          className="text-3xl md:text-5xl font-thin text-gray-900 mb-8 tracking-tight"
        >
          {activity.title}
        </h1>

        <p className="break-words text-gray-700 leading-relaxed whitespace-pre-wrap">
          {activity.description}
        </p>

        {hasExternalLink(activity.active) ? (
          <div className="mt-10 pb-1">
            <a
              href={activity.active.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-gray-900 px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:brightness-110"
            >
              関連リンクを見る
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
