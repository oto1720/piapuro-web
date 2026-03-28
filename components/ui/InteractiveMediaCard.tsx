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
      className="group w-full text-left rounded-3xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-raised)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/5 cursor-pointer tap-target"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <div className={`${imageHeightClassName} relative overflow-hidden bg-[var(--surface-muted)] pointer-events-none`}>
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes={imageSizes}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--surface-muted)] to-[var(--surface-hover)] flex items-center justify-center">
            <svg className="w-14 h-14 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        {topRightOverlay && <div className="absolute top-6 right-6">{topRightOverlay}</div>}
      </div>

      <div className={bodyClassName}>{children}</div>
    </button>
  );
}
