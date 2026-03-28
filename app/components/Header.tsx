'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'ホーム', href: '/' },
    { name: 'サークルについて', href: '/about' },
    { name: '作品一覧', href: '/works' },
    { name: '活動記録', href: '/activities' },
    { name: 'メンバー募集', href: '/recruit' },
    { name: 'お問い合わせ', href: '/contact' },
  ];

  return (
    <header className="bg-[var(--surface-raised)]/95 backdrop-blur-sm shadow-sm border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="tap-target inline-flex items-center text-2xl font-bold text-primary-token hover:text-secondary-token transition-colors">
            工事中
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="tap-target text-secondary-token hover:text-primary-token px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden tap-target p-2 rounded-md text-secondary-token hover:text-primary-token hover:bg-[var(--surface-muted)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="md:hidden border-t border-[var(--border-subtle)]">
            <div className="py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="tap-target block px-3 py-3 text-secondary-token hover:text-primary-token hover:bg-[var(--surface-muted)] text-sm font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}