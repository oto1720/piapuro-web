import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--surface-raised)] border-t border-[var(--border-subtle)] text-primary-token">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">福大ピアプロ</h3>
            <p className="text-secondary-token text-sm leading-relaxed">
              創作活動を通じて仲間と共に成長し、<br />
              素敵な作品を生み出すサークルです。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">サイトマップ</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="tap-target inline-flex items-center text-secondary-token hover:text-primary-token transition-colors">ホーム</Link></li>
              <li><Link href="/about" className="tap-target inline-flex items-center text-secondary-token hover:text-primary-token transition-colors">サークルについて</Link></li>
              <li><Link href="/works" className="tap-target inline-flex items-center text-secondary-token hover:text-primary-token transition-colors">作品一覧</Link></li>
              <li><Link href="/activities" className="tap-target inline-flex items-center text-secondary-token hover:text-primary-token transition-colors">活動記録</Link></li>
              <li><Link href="/recruit" className="tap-target inline-flex items-center text-secondary-token hover:text-primary-token transition-colors">メンバー募集</Link></li>
              <li><Link href="/contact" className="tap-target inline-flex items-center text-secondary-token hover:text-primary-token transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="text-sm text-secondary-token space-y-2">
              <p>Email: piapuro2024@gmail.com</p>
              <p>活動場所: 福岡大学</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border-subtle)] mt-8 pt-8 text-center">
          <p className="text-muted-token text-sm">
            © 2024-2026 福大ピアプロ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
