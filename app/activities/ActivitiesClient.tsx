'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Activity } from '@/lib/api';
import ActivityDetailModal from '@/components/ActivityDetailModal';

const categories = ["すべて", "モクモク会", "ハッカソン", "展示会", "懇親会", "イベント"];

interface ActivitiesClientProps {
  activities: Activity[];
}

export default function ActivitiesClient({ activities }: ActivitiesClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [detailActivity, setDetailActivity] = useState<Activity | null>(null);

  const filteredActivities = selectedCategory === "すべて"
    ? activities
    : activities.filter(activity => activity.category === selectedCategory);

  useEffect(() => {
    if (!selectedActivity) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedActivity(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedActivity]);

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

      {/* カテゴリフィルター */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 活動タイムライン */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-16">
            {filteredActivities.map((activity) => (
              <div key={activity.id} className="relative z-0 transition-all duration-300">
                <div
                  className="flex flex-col lg:flex-row items-start gap-12 transition-all duration-300 cursor-pointer hover:opacity-95"
                  onClick={() => setDetailActivity(activity)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setDetailActivity(activity);
                    }
                  }}
                >
                  {/* 画像エリア */}
                  <div className="flex-shrink-0 lg:w-1/3 w-full pointer-events-none">
                    <div className="h-64 relative overflow-hidden bg-gray-100 rounded-3xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                      {activity.image ? (
                        <Image
                          src={activity.image}
                          alt={activity.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 lg:w-2/3">
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 font-light mb-2">
                        {activity.year}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
                        {activity.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-6">
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                          activity.category === 'モクモク会' ? 'bg-blue-50 text-blue-700' :
                          activity.category === 'ハッカソン' ? 'bg-purple-50 text-purple-700' :
                          activity.category === '展示会' ? 'bg-green-50 text-green-700' :
                          activity.category === '懇親会' ? 'bg-pink-50 text-pink-700' :
                          activity.category === 'イベント' ? 'bg-orange-50 text-orange-700' :
                          'bg-gray-100 text-gray-800'
                        }`}>
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
                </button>
              </div>
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-gray-500 font-light">
                選択されたカテゴリーの活動はありません。
              </p>
            </div>
          )}
        </div>
      </section>

      {selectedActivity && (
        <div
          className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedActivity(null)}
          role="dialog"
          aria-modal="true"
          aria-label="活動詳細"
        >
          <div
            className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white border border-gray-100 rounded-3xl shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-100 p-4 md:p-6 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedActivity(null)}
                className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                aria-label="閉じる"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-[520px] bg-gray-100">
                {selectedActivity.image ? (
                  <Image
                    src={selectedActivity.image}
                    alt={selectedActivity.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 flex-wrap mb-5">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                    {selectedActivity.category}
                  </span>
                  <span className="text-sm text-gray-500">{selectedActivity.year}</span>
                  <span className="text-sm text-gray-500">参加者 {selectedActivity.participants}名</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-thin text-gray-900 mb-8 tracking-tight">
                  {selectedActivity.title}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {selectedActivity.description}
                </p>
                {selectedActivity.active && (
                  <div className="mt-10">
                    <a
                      href={selectedActivity.active}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105"
                    >
                      関連リンクを見る
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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
                {activities.length > 0
                  ? Math.round(activities.reduce((sum, activity) => sum + activity.participants, 0) / activities.length)
                  : 0}
              </div>
              <div className="text-gray-600 font-light">平均参加者数</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-thin text-gray-900 mb-2">
                {new Set(activities.map(a => a.category)).size}
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

      <ActivityDetailModal activity={detailActivity} onClose={() => setDetailActivity(null)} />
    </div>
  );
}
