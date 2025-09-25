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
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    date: "2024.12.01",
    title: "新メンバー歓迎会",
    category: "交流",
    description: "12月に新しく加わった5名のメンバーを迎えて歓迎会を開催しました。自己紹介タイムでは、それぞれの創作への想いを聞かせてもらい、これからの活動がより一層楽しみになりました。",
    participants: 25,
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    date: "2024.11.20",
    title: "デジタルアート勉強会",
    category: "勉強会",
    description: "デジタルペインティングの基礎から応用まで、プロのイラストレーターの方を講師にお招きして勉強会を開催しました。実際に手を動かしながら学ぶことで、多くのメンバーが新しい技術を身につけることができました。",
    participants: 18,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    date: "2024.10.30",
    title: "ハロウィン作品コンテスト",
    category: "コンテスト",
    description: "ハロウィンをテーマにした作品コンテストを開催しました。イラスト、音楽、小説の3部門で計22作品の応募があり、どれも力作揃いでした。投票の結果、各部門の優秀作品を決定しました。",
    participants: 22,
    color: "from-orange-500 to-red-600"
  },
  {
    id: 5,
    date: "2024.10.15",
    title: "音楽制作ワークショップ",
    category: "勉強会",
    description: "DTMソフトを使った音楽制作のワークショップを開催しました。基本的な楽曲制作から、エフェクトの使い方まで幅広くカバー。参加者全員が短い楽曲を完成させることができました。",
    participants: 12,
    color: "from-teal-500 to-blue-600"
  },
  {
    id: 6,
    date: "2024.09.25",
    title: "秋の作品発表会",
    category: "イベント",
    description: "夏の間に制作した作品の発表会を開催しました。イラスト、音楽、小説、写真など多様なジャンルの作品が集まり、お互いの創作活動を讃え合う素晴らしい時間となりました。",
    participants: 28,
    color: "from-yellow-500 to-orange-600"
  }
];

export default function Activities() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-gray-900 mb-8 tracking-tight">
            Activities
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            これまでの活動とイベントの記録です
          </p>
        </div>
      </section>

      {/* 活動タイムライン */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-16">
            {activities.map((activity, index) => (
              <div key={activity.id} className="group">
                <div className="flex flex-col lg:flex-row items-start gap-12">
                  <div className="flex-shrink-0 lg:w-1/3">
                    <div className={`h-64 bg-gradient-to-br ${activity.color} rounded-3xl`}></div>
                  </div>

                  <div className="flex-1 lg:w-2/3">
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 font-light mb-2">
                        {activity.date}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
                        {activity.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                          {activity.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm font-light">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {activity.participants}名参加
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 font-light leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 統計セクション */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              統計
            </h2>
            <p className="text-lg text-gray-600 font-light">
              これまでの活動成果
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-thin text-gray-900 mb-2">
                {activities.length}
              </div>
              <div className="text-gray-600 font-light">総活動回数</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-thin text-gray-900 mb-2">
                {Math.round(activities.reduce((sum, activity) => sum + activity.participants, 0) / activities.length)}
              </div>
              <div className="text-gray-600 font-light">平均参加者数</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-thin text-gray-900 mb-2">
                4
              </div>
              <div className="text-gray-600 font-light">活動カテゴリー数</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-thin text-gray-900 mb-2">
                45
              </div>
              <div className="text-gray-600 font-light">現在のメンバー数</div>
            </div>
          </div>
        </div>
      </section>

      {/* 次回予定セクション */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              次回予定
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-12">
              <h3 className="text-3xl font-medium text-gray-900 mb-6">
                春の作品展準備会
              </h3>
              <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                来年3月に予定している春の作品展に向けて、展示内容や会場準備について話し合います。
                新しいアイデアや企画がある方は、ぜひご参加ください。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-gray-600 font-light">2025年1月18日（土）</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-gray-600 font-light">14:00〜17:00</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-gray-600 font-light">学生会館2F 第3会議室</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}