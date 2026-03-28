interface CategoryBadgeProps {
  category: string;
  kind: 'work' | 'activity';
  size?: 'sm' | 'md';
}

const workCategoryColors: Record<string, string> = {
  モバイルアプリ: 'bg-sky-100 text-sky-800 dark:bg-sky-900/35 dark:text-sky-200',
  Webアプリ: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/35 dark:text-emerald-200',
  ゲーム: 'bg-violet-100 text-violet-800 dark:bg-violet-900/35 dark:text-violet-200',
  イラスト: 'bg-rose-100 text-rose-800 dark:bg-rose-900/35 dark:text-rose-200',
  他: 'bg-amber-100 text-amber-800 dark:bg-amber-900/35 dark:text-amber-200',
};

const activityCategoryColors: Record<string, string> = {
  モクモク会: 'bg-sky-100 text-sky-800 dark:bg-sky-900/35 dark:text-sky-200',
  ハッカソン: 'bg-violet-100 text-violet-800 dark:bg-violet-900/35 dark:text-violet-200',
  展示会: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/35 dark:text-emerald-200',
  懇親会: 'bg-rose-100 text-rose-800 dark:bg-rose-900/35 dark:text-rose-200',
  イベント: 'bg-amber-100 text-amber-800 dark:bg-amber-900/35 dark:text-amber-200',
};

function getCategoryColorClass(kind: 'work' | 'activity', category: string) {
  const palette = kind === 'work' ? workCategoryColors : activityCategoryColors;
  return palette[category] ?? 'bg-[var(--surface-muted)] text-[var(--text-secondary)]';
}

export function getWorkCategoryTextColorClass(category: string) {
  const colorClass = getCategoryColorClass('work', category);

  if (colorClass.includes('sky')) return 'text-sky-600 dark:text-sky-300';
  if (colorClass.includes('emerald')) return 'text-emerald-600 dark:text-emerald-300';
  if (colorClass.includes('violet')) return 'text-violet-600 dark:text-violet-300';
  if (colorClass.includes('rose')) return 'text-rose-600 dark:text-rose-300';
  if (colorClass.includes('amber')) return 'text-amber-600 dark:text-amber-300';

  return 'text-[var(--text-secondary)]';
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
        getCategoryColorClass(kind, category),
      ].join(' ')}
    >
      {category}
    </span>
  );
}
