'use client';

import { useRef } from 'react';
import type { Activity } from '@/lib/api';
import { ActivityDetailView } from './ActivityDetailView';
import { useModalFocusTrap } from '@/components/ui/useModalFocusTrap';

interface ActivityDetailModalProps {
  activity: Activity | null;
  onClose: () => void;
}

export default function ActivityDetailModal({ activity, onClose }: ActivityDetailModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useModalFocusTrap({
    isOpen: activity !== null,
    dialogRef,
    onClose,
  });

  if (!activity) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="activity-detail-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label="閉じる"
      />
      <div ref={dialogRef} tabIndex={-1} className="relative w-full max-w-6xl">
        <button
          type="button"
          onClick={onClose}
          className="tap-target absolute -right-1 -top-1 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface-raised)] text-primary-token shadow-lg ring-1 ring-[var(--border-subtle)] transition hover:bg-[var(--surface-muted)] md:right-0 md:top-0"
          aria-label="閉じる"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="max-h-[min(92dvh,920px)] overflow-y-auto overflow-x-hidden overscroll-y-contain rounded-3xl bg-[var(--surface-raised)] shadow-sm ring-1 ring-[var(--border-subtle)]">
          <ActivityDetailView activity={activity} />
        </div>
      </div>
    </div>
  );
}
