'use client';

import { useEffect } from 'react';
import type { Work } from '@/lib/api';
import { WorkDetailView } from './WorkDetailView';

interface WorkDetailModalProps {
  work: Work | null;
  onClose: () => void;
}

export default function WorkDetailModal({ work, onClose }: WorkDetailModalProps) {
  useEffect(() => {
    if (!work) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [work, onClose]);

  if (!work) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="work-detail-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label="閉じる"
      />
      <div className="relative w-full max-w-6xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute -right-1 -top-1 z-[110] flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg ring-1 ring-gray-200 transition hover:bg-gray-50 md:right-0 md:top-0"
          aria-label="閉じる"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="max-h-[min(92dvh,920px)] overflow-y-auto overflow-x-hidden overscroll-y-contain rounded-3xl bg-white shadow-sm ring-1 ring-gray-100">
          <WorkDetailView work={work} />
        </div>
      </div>
    </div>
  );
}
