import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">福大ピアプロ</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              創作活動を通じて仲間と共に成長し、<br />
              素敵な作品を生み出すサークルです。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">サイトマップ</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">ホーム</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">サークルについて</Link></li>
              <li><Link href="/works" className="text-gray-300 hover:text-white transition-colors">作品一覧</Link></li>
              <li><Link href="/activities" className="text-gray-300 hover:text-white transition-colors">活動記録</Link></li>
              <li><Link href="/recruit" className="text-gray-300 hover:text-white transition-colors">メンバー募集</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Email: info@piapuro-circle.com</p>
              <p>活動場所: 福岡大学</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 福大ピアプロ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}