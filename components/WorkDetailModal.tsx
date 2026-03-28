'use client';

import { useEffect, useRef } from 'react';
import type { Work } from '@/lib/api';
import { WorkDetailView } from './WorkDetailView';

interface WorkDetailModalProps {
  work: Work | null;
  onClose: () => void;
}

export default function WorkDetailModal({ work, onClose }: WorkDetailModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!work) return;
    const prev = document.body.style.overflow;
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

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();

      if (e.key === 'Tab' && dialog) {
        const focusable = dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );

        if (focusable.length === 0) {
          e.preventDefault();
          dialog.focus();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      previousFocusedRef.current?.focus();
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
          <WorkDetailView work={work} />
        </div>
      </div>
    </div>
  );
}
