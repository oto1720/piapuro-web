import Image from 'next/image';
import { ReactNode } from 'react';

interface InteractiveMediaCardProps {
  image?: string;
  imageAlt: string;
  imageSizes: string;
  imageHeightClassName: string;
  onClick: () => void;
  ariaLabel: string;
  bodyClassName?: string;
  topRightOverlay?: ReactNode;
  children: ReactNode;
}

export default function InteractiveMediaCard({
  image,
  imageAlt,
  imageSizes,
  imageHeightClassName,
  onClick,
  ariaLabel,
  bodyClassName = 'p-8',
  topRightOverlay,
  children,
}: InteractiveMediaCardProps) {
  return (
    <button
      type="button"
      className="group relative isolate w-full text-left rounded-3xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-raised)] shadow-lg shadow-black/[0.03] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10 hover:border-[color-mix(in_srgb,var(--accent)_22%,var(--border-subtle))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color-mix(in_srgb,var(--accent)_38%,transparent)] cursor-pointer tap-target"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[color-mix(in_srgb,var(--accent)_78%,transparent)] via-[color-mix(in_srgb,var(--accent)_54%,transparent)] to-[color-mix(in_srgb,var(--accent)_22%,transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className={`${imageHeightClassName} relative overflow-hidden bg-[var(--surface-muted)] pointer-events-none`}>
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={imageSizes}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--surface-muted)] to-[var(--surface-hover)] flex items-center justify-center">
            <svg className="w-14 h-14 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

        {topRightOverlay && <div className="absolute top-5 right-5">{topRightOverlay}</div>}
      </div>

      <div className={`relative ${bodyClassName}`}>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[color-mix(in_srgb,var(--border-subtle)_74%,transparent)]" />
        {children}
      </div>
    </button>
  );
}
