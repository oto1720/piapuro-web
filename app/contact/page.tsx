'use client';
import { useState } from 'react';

const contactMethods = [
  {
    icon: (
      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "メール",
    description: "お気軽にメールでお問い合わせください",
    contact: "piapuro2024@gmail.com",
    link: "mailto:piapuro2024@gmail.com"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "活動場所",
    description: "見学も大歓迎です",
    contact: "福岡大学 14号館 3階",
    link: null
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "活動時間",
    description: "定期活動は毎週開催",
    contact: "毎週月曜日、木曜日 18:00〜20:00",
    link: null
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const subject = `[福大ピアプロ問い合わせ] ${formData.subject}`;
      const body = [
        `お名前: ${formData.name}`,
        `メールアドレス: ${formData.email}`,
        '',
        'お問い合わせ内容:',
        formData.message,
      ].join('\n');

      const mailto = `mailto:piapuro2024@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;

      setSubmitMessage('メールアプリを起動しました。内容をご確認のうえ送信してください。');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitMessage('メールアプリの起動に失敗しました。piapuro2024@gmail.com まで直接ご連絡ください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-gray-900 mb-8 tracking-tight">
            Contact
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            ご質問やご相談がございましたら、お気軽にお問い合わせください
          </p>
        </div>
      </section>

      {/* 連絡方法セクション */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  {method.title}
                </h3>
                <p className="text-gray-600 font-light mb-6">
                  {method.description}
                </p>
                {method.link ? (
                  <a
                    href={method.link}
                    className="text-gray-900 hover:text-gray-600 font-medium transition-colors"
                  >
                    {method.contact}
                  </a>
                ) : (
                  <p className="text-gray-800 font-medium">
                    {method.contact}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              お問い合わせフォーム
            </h2>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-12 shadow-sm">
            {submitMessage && (
              <div className="mb-8 p-6 bg-green-50 border border-green-100 rounded-2xl" role="status" aria-live="polite">
                <p className="text-green-700 font-light">{submitMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-3">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                >
                  <option value="">選択してください</option>
                  <option value="入会希望">入会希望</option>
                  <option value="見学希望">見学希望</option>
                  <option value="活動について">活動について</option>
                  <option value="作品について">作品について</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={8}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="お問い合わせ内容をご記入ください..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-12 py-4 rounded-full font-medium text-white transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gray-900 hover:bg-gray-800 hover:scale-105'
                  }`}
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* よくある質問セクション */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              よくある質問
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "見学はいつでもできますか？",
                answer: "活動日の毎週月曜日、木曜日18:00〜20:00の間でしたら、いつでも見学可能です。"
              },
              {
                question: "入会に費用はかかりますか？",
                answer: "今の所はかかりません。"
              },
              {
                question: "どのくらいの経験が必要ですか？",
                answer: "経験は一切不要です。初心者の方も多数在籍しており、みんなで一緒に学んでいく環境です。"
              },
              {
                question: "途中から参加することはできますか？",
                answer: "はい、年間を通していつでも参加可能です。新しいメンバーはいつでも大歓迎です。"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Q. {faq.question}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  A. {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}