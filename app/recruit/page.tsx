import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'メンバー募集 - ピアプロサークル',
  description: 'ピアプロサークルでは新しいメンバーを募集しています。創作活動に興味のある方はお気軽にお問い合わせください。',
};

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "スキルアップ",
    description: "定期的な勉強会やワークショップで、創作技術を向上させることができます。"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "仲間との出会い",
    description: "同じ趣味を持つ仲間と出会い、一緒に創作活動を楽しむことができます。"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "作品発表の場",
    description: "定期的な作品展やコンテストで、あなたの作品を多くの人に見てもらえます。"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "創作への情熱共有",
    description: "創作への熱い想いを共有し、お互いに刺激し合いながら成長できます。"
  }
];

const requirements = [
  "創作活動に興味・関心がある方",
  "定期的な活動に参加できる方",
  "仲間と協調して活動できる方",
  "向上心を持って取り組める方"
];

const faqs = [
  {
    question: "初心者でも参加できますか？",
    answer: "もちろんです！経験や技術レベルは問いません。みんなで一緒に学び、成長していくことを大切にしています。"
  },
  {
    question: "活動に必要な道具や材料は自分で用意するのですか？",
    answer: "基本的な道具は各自でご用意いただきますが、特殊な機材や高価な材料は サークルで共用のものを用意しています。"
  },
  {
    question: "毎回参加しなければいけませんか？",
    answer: "無理に毎回参加する必要はありません。学業や他の活動との両立を考慮し、無理のない範囲での参加をお願いしています。"
  },
  {
    question: "どんなジャンルの創作活動を行っていますか？",
    answer: "イラスト、音楽、小説、写真など様々なジャンルで活動しています。複数のジャンルに興味がある方も大歓迎です。"
  }
];

export default function Recruit() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            メンバー募集
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            新しい仲間をお待ちしています！
          </p>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <div className="text-2xl font-bold text-blue-600 mb-2">募集中</div>
            <div className="text-gray-600">
              随時メンバーを募集しています
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            サークルに参加するメリット
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                募集要項
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">対象</h3>
                    <p className="text-gray-600">〇〇大学の学生（学年不問）</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">募集人数</h3>
                    <p className="text-gray-600">10名程度</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">活動費</h3>
                    <p className="text-gray-600">月額 1,000円</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">活動日時</h3>
                    <p className="text-gray-600">毎週土曜日 14:00〜17:00</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">活動場所</h3>
                    <p className="text-gray-600">学生会館2F 第3会議室</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                応募条件
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            応募の流れ
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gray-300 hidden md:block"></div>
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "お問い合わせ",
                  description: "お問い合わせフォームまたはメールにて、参加希望の旨をお伝えください。"
                },
                {
                  step: "2",
                  title: "見学・体験参加",
                  description: "実際の活動を見学していただき、雰囲気を感じてください。体験参加も大歓迎です。"
                },
                {
                  step: "3",
                  title: "面談",
                  description: "簡単な面談を行い、創作への想いや参加動機をお聞かせください。"
                },
                {
                  step: "4",
                  title: "入会手続き",
                  description: "入会申込書の記入と活動費のお支払いをお願いします。"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            よくある質問
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Q. {faq.question}
                </h3>
                <p className="text-gray-600">
                  A. {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            まずは気軽にお問い合わせください
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            興味を持っていただけた方は、お気軽にお問い合わせください。
            見学だけでも大歓迎です！創作活動を通じて、素晴らしい仲間との出会いが待っています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              お問い合わせ
            </Link>
            <Link
              href="/activities"
              className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              活動記録を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}