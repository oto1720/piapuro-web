'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
    <div className="bg-[var(--surface-raised)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
      {submitMessage && (
        <div
          className="mb-8 p-6 bg-[var(--success-bg)] border border-[var(--success-border)] rounded-2xl"
          role="status"
          aria-live="polite"
        >
          <p className="text-[var(--success-text)] font-light">{submitMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-secondary-token mb-3">
              お名前 <span className="text-[var(--required-text)]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-4 border border-[var(--border-subtle)] bg-[var(--surface-raised)] rounded-2xl text-primary-token placeholder:text-muted-token focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-[border-color,box-shadow] duration-300"
              placeholder="山田 太郎"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondary-token mb-3">
              メールアドレス <span className="text-[var(--required-text)]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-4 border border-[var(--border-subtle)] bg-[var(--surface-raised)] rounded-2xl text-primary-token placeholder:text-muted-token focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-[border-color,box-shadow] duration-300"
              placeholder="example@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-secondary-token mb-3">
            お問い合わせ種別 <span className="text-[var(--required-text)]">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-6 py-4 border border-[var(--border-subtle)] bg-[var(--surface-raised)] rounded-2xl text-primary-token focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-[border-color,box-shadow] duration-300"
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
          <label htmlFor="message" className="block text-sm font-medium text-secondary-token mb-3">
            メッセージ <span className="text-[var(--required-text)]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={8}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-6 py-4 border border-[var(--border-subtle)] bg-[var(--surface-raised)] rounded-2xl text-primary-token placeholder:text-muted-token focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-[border-color,box-shadow] duration-300 resize-none"
            placeholder="お問い合わせ内容をご記入ください..."
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`tap-target px-12 py-4 rounded-full font-medium transition-[transform,opacity,background-color] duration-300 ${
              isSubmitting
                ? 'bg-[var(--surface-hover)] text-muted-token cursor-not-allowed'
                : 'bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 hover:scale-105'
            }`}
          >
            {isSubmitting ? '送信中...' : '送信する'}
          </button>
        </div>
      </form>
    </div>
  );
}
