import type { CSSProperties } from 'react';

interface CategoryBadgeProps {
  category: string;
  kind: 'work' | 'activity';
  size?: 'sm' | 'md';
}

const workCategoryTokens: Record<string, string> = {
  モバイルアプリ: 'sky',
  Webアプリ: 'emerald',
  ゲーム: 'violet',
  イラスト: 'rose',
  他: 'amber',
};

const activityCategoryTokens: Record<string, string> = {
  モクモク会: 'sky',
  ハッカソン: 'violet',
  展示会: 'emerald',
  懇親会: 'rose',
  イベント: 'amber',
};

function getCategoryToken(kind: 'work' | 'activity', category: string) {
  const palette = kind === 'work' ? workCategoryTokens : activityCategoryTokens;
  return palette[category] ?? null;
}

export function getWorkCategoryTextColorClass(category: string) {
  const token = getCategoryToken('work', category);

  if (token) return `text-[var(--category-${token}-text-strong)]`;

  return 'text-[var(--text-secondary)]';
}

function getCategoryStyle(kind: 'work' | 'activity', category: string): CSSProperties | undefined {
  const token = getCategoryToken(kind, category);

  if (!token) {
    return undefined;
  }

  return {
    backgroundColor: `var(--category-${token}-bg)`,
    color: `var(--category-${token}-text)`,
  };
}

export default function CategoryBadge({
  category,
  kind,
  size = 'sm',
}: CategoryBadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full font-medium',
        size === 'sm' ? 'px-3 py-1 text-xs' : 'px-4 py-2 text-sm',
        'bg-[var(--surface-muted)] text-[var(--text-secondary)]',
      ].join(' ')}
      style={getCategoryStyle(kind, category)}
    >
      {category}
    </span>
  );
}
