import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '活動記録 - ピアプロサークル',
  description: 'ピアプロサークルの活動記録や過去のイベント情報をご紹介します。',
};

const activities = [
  {
    id: 1,
    date: "2024.12.15",
    title: "冬のイラスト展開催",
    category: "イベント",
    description: "メンバーが制作したイラスト作品の展示会を開催しました。今回は「冬」をテーマに、15点の作品を展示。多くの来場者に恵まれ、作品に対する感想やアドバイスをいただくことができました。",
    participants: 20,
    image: "/placeholder-event1.jpg"
  },
  {
    id: 2,
    date: "2024.12.01",
    title: "新メンバー歓迎会",
    category: "交流",
    description: "12月に新しく加わった5名のメンバーを迎えて歓迎会を開催しました。自己紹介タイムでは、それぞれの創作への想いを聞かせてもらい、これからの活動がより一層楽しみになりました。",
    participants: 25,
    image: "/placeholder-party.jpg"
  },
  {
    id: 3,
    date: "2024.11.20",
    title: "デジタルアート勉強会",
    category: "勉強会",
    description: "デジタルペインティングの基礎から応用まで、プロのイラストレーターの方を講師にお招きして勉強会を開催しました。実際に手を動かしながら学ぶことで、多くのメンバーが新しい技術を身につけることができました。",
    participants: 18,
    image: "/placeholder-workshop.jpg"
  },
  {
    id: 4,
    date: "2024.10.30",
    title: "ハロウィン作品コンテスト",
    category: "コンテスト",
    description: "ハロウィンをテーマにした作品コンテストを開催しました。イラスト、音楽、小説の3部門で計22作品の応募があり、どれも力作揃いでした。投票の結果、各部門の優秀作品を決定しました。",
    participants: 22,
    image: "/placeholder-contest.jpg"
  },
  {
    id: 5,
    date: "2024.10.15",
    title: "音楽制作ワークショップ",
    category: "勉強会",
    description: "DTMソフトを使った音楽制作のワークショップを開催しました。基本的な楽曲制作から、エフェクトの使い方まで幅広くカバー。参加者全員が短い楽曲を完成させることができました。",
    participants: 12,
    image: "/placeholder-music-workshop.jpg"
  },
  {
    id: 6,
    date: "2024.09.25",
    title: "秋の作品発表会",
    category: "イベント",
    description: "夏の間に制作した作品の発表会を開催しました。イラスト、音楽、小説、写真など多様なジャンルの作品が集まり、お互いの創作活動を讃え合う素晴らしい時間となりました。",
    participants: 28,
    image: "/placeholder-presentation.jpg"
  },
  {
    id: 7,
    date: "2024.08.20",
    title: "夏合宿 in 軽井沢",
    category: "合宿",
    description: "2泊3日の夏合宿を軽井沢で開催しました。自然に囲まれた環境で、普段とは違う創作活動に取り組みました。夜には作品について語り合い、メンバー同士の絆を深めることができました。",
    participants: 23,
    image: "/placeholder-camp.jpg"
  },
  {
    id: 8,
    date: "2024.07.10",
    title: "写真撮影講座",
    category: "勉強会",
    description: "プロの写真家を講師に迎え、撮影技術の基礎から実践まで学びました。構図や光の使い方、編集テクニックなど、すぐに活用できる知識を身につけることができました。",
    participants: 15,
    image: "/placeholder-photo-workshop.jpg"
  }
];

const categories = [
  { name: "イベント", color: "bg-blue-100 text-blue-800" },
  { name: "勉強会", color: "bg-green-100 text-green-800" },
  { name: "交流", color: "bg-purple-100 text-purple-800" },
  { name: "コンテスト", color: "bg-red-100 text-red-800" },
  { name: "合宿", color: "bg-yellow-100 text-yellow-800" }
];

function getCategoryColor(category: string) {
  const found = categories.find(cat => cat.name === category);
  return found ? found.color : "bg-gray-100 text-gray-800";
}

export default function Activities() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            活動記録
          </h1>
          <p className="text-xl text-gray-700">
            これまでの活動とイベントの記録です
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {activities.map((activity, index) => (
              <div key={activity.id} className="relative">
                {index < activities.length - 1 && (
                  <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-gray-300"></div>
                )}

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex-1 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="mb-2 sm:mb-0">
                        <div className="text-sm text-blue-600 font-semibold mb-1">
                          {activity.date}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {activity.title}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(activity.category)}`}>
                          {activity.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {activity.participants}名参加
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            活動統計
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {activities.length}
              </div>
              <div className="text-gray-600">
                総活動回数
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {Math.round(activities.reduce((sum, activity) => sum + activity.participants, 0) / activities.length)}
              </div>
              <div className="text-gray-600">
                平均参加者数
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {categories.length}
              </div>
              <div className="text-gray-600">
                活動カテゴリー数
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-red-600 mb-2">
                25
              </div>
              <div className="text-gray-600">
                現在のメンバー数
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            次回予定
          </h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              春の作品展準備会
            </h3>
            <p className="text-gray-600 mb-6">
              来年3月に予定している春の作品展に向けて、展示内容や会場準備について話し合います。
              新しいアイデアや企画がある方は、ぜひご参加ください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                2025年1月18日（土）
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                14:00〜17:00
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                学生会館2F 第3会議室
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}