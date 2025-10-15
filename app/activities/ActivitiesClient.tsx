'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Activity } from '@/lib/api';

interface ActivitiesClientProps {
  activities: Activity[];
}

export default function ActivitiesClient({ activities }: ActivitiesClientProps) {
  const [selectedActivityId, setSelectedActivityId] = useState<number | null>(null);
  return (
    <div
      className="min-h-screen bg-white"
      onClick={() => selectedActivityId && setSelectedActivityId(null)}
    >
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
            {activities.map((activity) => (
              <div
                key={activity.id}
                className={`transition-all duration-300 ${
                  selectedActivityId === activity.id ? 'relative z-50' : 'relative z-0'
                }`}
              >
                <div
                  className={`flex flex-col lg:flex-row items-start gap-12 transition-all duration-300 cursor-pointer ${
                    selectedActivityId === activity.id ? 'scale-105' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedActivityId(selectedActivityId === activity.id ? null : activity.id);
                  }}
                >
                  {/* 画像エリア */}
                  <div className="flex-shrink-0 lg:w-1/3 w-full">
                    <div className={`h-64 relative overflow-hidden bg-gray-100 rounded-3xl transition-all duration-300 ${
                      selectedActivityId === activity.id
                        ? 'shadow-2xl shadow-black/20 scale-110'
                        : 'hover:shadow-xl hover:scale-105'
                    }`}>
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

                      {/* 詳細ボタン（クリック時に表示） */}
                      {selectedActivityId === activity.id && activity.active && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center animate-fade-in">
                          <a
                            href={activity.active}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg"
                          >
                            詳細を見る
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 lg:w-2/3">
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 font-light mb-2">
                        {activity.year}年
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
    </div>
  );
}
