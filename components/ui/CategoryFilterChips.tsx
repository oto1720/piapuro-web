'use client';

interface CategoryFilterChipsProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilterChips({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterChipsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={[
              'tap-target rounded-full px-6 py-2.5 text-sm font-medium transition-[background-color,color,box-shadow,transform] duration-300',
              isSelected
                ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-lg'
                : 'bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:bg-[var(--surface-hover)]',
            ].join(' ')}
            aria-pressed={isSelected}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
