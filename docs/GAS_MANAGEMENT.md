# GASで作品一覧と活動記録を管理する方法

## 概要
Google Apps Script (GAS) を使ってGoogleスプレッドシートでデータを管理し、Next.jsアプリケーションから取得する方法を説明します。

---

## 1. Googleスプレッドシートの準備

### 1-1. 作品一覧シート（Works）

| id | title | artist | category | year | description | color |
|----|-------|--------|----------|------|-------------|-------|
| 1 | 夕日の風景 | 田中 美咲 | イラスト | 2024 | 故郷の夕日を描いた水彩画です... | from-orange-400 to-red-500 |
| 2 | 春のメロディー | 佐藤 健太 | 音楽 | 2024 | 桜をテーマにしたピアノ曲です... | from-pink-400 to-rose-500 |

### 1-2. 活動記録シート（Activities）

| id | date | title | category | description | participants | color |
|----|------|-------|----------|-------------|--------------|-------|
| 1 | 2024.12.15 | 冬のイラスト展開催 | イベント | メンバーが制作した... | 20 | from-blue-500 to-blue-600 |
| 2 | 2024.12.01 | 新メンバー歓迎会 | 交流 | 12月に新しく加わった... | 25 | from-green-500 to-green-600 |

---

## 2. Google Apps Scriptの設定

### 2-1. GASエディタを開く
1. スプレッドシートを開く
2. 「拡張機能」→「Apps Script」をクリック

### 2-2. スクリプトコードを記述

```javascript
// Code.gs

function doGet(e) {
  const sheet = e.parameter.sheet;

  if (sheet === 'works') {
    return getWorksData();
  } else if (sheet === 'activities') {
    return getActivitiesData();
  }

  return ContentService
    .createTextOutput(JSON.stringify({ error: 'Invalid sheet parameter' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// 作品一覧データを取得
function getWorksData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Works');
  const data = sheet.getDataRange().getValues();

  // ヘッダー行を除く
  const headers = data[0];
  const rows = data.slice(1);

  const works = rows.map(row => {
    const obj = {};
    headers.forEach((header, index) => {
      // idとyearは数値、participantsも数値に変換
      if (header === 'id' || header === 'year') {
        obj[header] = Number(row[index]);
      } else {
        obj[header] = row[index];
      }
    });
    return obj;
  }).filter(work => work.id); // 空行を除外

  return ContentService
    .createTextOutput(JSON.stringify({ works }))
    .setMimeType(ContentService.MimeType.JSON);
}

// 活動記録データを取得
function getActivitiesData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Activities');
  const data = sheet.getDataRange().getValues();

  // ヘッダー行を除く
  const headers = data[0];
  const rows = data.slice(1);

  const activities = rows.map(row => {
    const obj = {};
    headers.forEach((header, index) => {
      // idとparticipantsは数値に変換
      if (header === 'id' || header === 'participants') {
        obj[header] = Number(row[index]);
      } else {
        obj[header] = row[index];
      }
    });
    return obj;
  }).filter(activity => activity.id); // 空行を除外

  return ContentService
    .createTextOutput(JSON.stringify({ activities }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 2-3. Webアプリケーションとしてデプロイ

1. 右上の「デプロイ」→「新しいデプロイ」をクリック
2. 「種類の選択」で「ウェブアプリ」を選択
3. 設定：
   - 説明: 「ピアプロWeb API」
   - 実行ユーザー: 「自分」
   - アクセスできるユーザー: 「全員」（公開する場合）
4. 「デプロイ」をクリック
5. **デプロイされたURLをコピー**（例: `https://script.google.com/macros/s/XXX/exec`）

---

## 3. Next.jsでデータを取得

### 3-1. 環境変数の設定

`.env.local` ファイルを作成：

```bash
NEXT_PUBLIC_GAS_API_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### 3-2. API関数の作成

`lib/api.ts` を作成：

```typescript
// lib/api.ts

export interface Work {
  id: number;
  title: string;
  artist: string;
  category: string;
  year: string;
  description: string;
  color: string;
}

export interface Activity {
  id: number;
  date: string;
  title: string;
  category: string;
  description: string;
  participants: number;
  color: string;
}

const GAS_API_URL = process.env.NEXT_PUBLIC_GAS_API_URL;

export async function getWorksFromGAS(): Promise<Work[]> {
  try {
    const response = await fetch(`${GAS_API_URL}?sheet=works`, {
      next: { revalidate: 3600 } // 1時間キャッシュ
    });

    if (!response.ok) {
      throw new Error('Failed to fetch works');
    }

    const data = await response.json();
    return data.works || [];
  } catch (error) {
    console.error('Error fetching works:', error);
    return [];
  }
}

export async function getActivitiesFromGAS(): Promise<Activity[]> {
  try {
    const response = await fetch(`${GAS_API_URL}?sheet=activities`, {
      next: { revalidate: 3600 } // 1時間キャッシュ
    });

    if (!response.ok) {
      throw new Error('Failed to fetch activities');
    }

    const data = await response.json();
    return data.activities || [];
  } catch (error) {
    console.error('Error fetching activities:', error);
    return [];
  }
}
```

### 3-3. Worksページの更新

`app/works/page.tsx` を更新：

```typescript
// app/works/page.tsx
import { getWorksFromGAS } from '@/lib/api';
import WorksClient from './WorksClient';

export default async function Works() {
  const works = await getWorksFromGAS();

  return <WorksClient initialWorks={works} />;
}
```

`app/works/WorksClient.tsx` を新規作成：

```typescript
// app/works/WorksClient.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Work } from '@/lib/api';

const categories = ["すべて", "イラスト", "音楽", "小説", "写真"];

interface WorksClientProps {
  initialWorks: Work[];
}

export default function WorksClient({ initialWorks }: WorksClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("すべて");

  const filteredWorks = selectedCategory === "すべて"
    ? initialWorks
    : initialWorks.filter(work => work.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-gray-900 mb-8 tracking-tight">
            Works
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            メンバーが制作した作品一覧
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

      {/* 作品グリッド */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work) => (
              <div key={work.id} className="group cursor-pointer">
                <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2">
                  <div className={`h-64 bg-gradient-to-br ${work.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-6 right-6">
                      <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
                        {work.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        work.category === 'イラスト' ? 'bg-blue-50 text-blue-700' :
                        work.category === '音楽' ? 'bg-green-50 text-green-700' :
                        work.category === '小説' ? 'bg-purple-50 text-purple-700' :
                        'bg-gray-50 text-gray-700'
                      }`}>
                        {work.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-medium text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                      {work.title}
                    </h3>

                    <p className="text-gray-600 font-light mb-4">
                      作者: {work.artist}
                    </p>

                    <p className="text-gray-600 font-light leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredWorks.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-gray-500 font-light">
                選択されたカテゴリーの作品はありません。
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-8 tracking-tight">
              作品について
            </h2>
            <p className="text-lg text-gray-600 font-light mb-12 leading-relaxed">
              作品の詳細や実際の展示については、お気軽にお問い合わせください。<br />
              また、あなたも私たちと一緒に創作活動を始めませんか？
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105"
              >
                お問い合わせ
              </Link>
              <Link
                href="/recruit"
                className="inline-block bg-white border border-gray-300 text-gray-900 px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105"
              >
                メンバー募集
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
```

### 3-4. Activitiesページの更新

`app/activities/page.tsx` を更新：

```typescript
// app/activities/page.tsx
import { Metadata } from 'next';
import { getActivitiesFromGAS } from '@/lib/api';
import ActivitiesClient from './ActivitiesClient';

export const metadata: Metadata = {
  title: '活動記録 - 福大ピアプロ',
  description: '福大ピアプロの活動記録や過去のイベント情報をご紹介します。',
};

export default async function Activities() {
  const activities = await getActivitiesFromGAS();

  return <ActivitiesClient activities={activities} />;
}
```

`app/activities/ActivitiesClient.tsx` を新規作成：

```typescript
// app/activities/ActivitiesClient.tsx
'use client';
import { Activity } from '@/lib/api';

interface ActivitiesClientProps {
  activities: Activity[];
}

export default function ActivitiesClient({ activities }: ActivitiesClientProps) {
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
            {activities.map((activity) => (
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
```

---

## 4. 実装のメリット

1. **簡単な更新**: スプレッドシートでデータを編集するだけ
2. **非エンジニアでも管理可能**: コードを触らずにデータ管理
3. **リアルタイム反映**: スプレッドシートの変更が自動的にサイトに反映
4. **履歴管理**: Googleスプレッドシートのバージョン履歴機能を活用
5. **共同編集**: 複数人で同時にデータを管理可能

---

## 5. キャッシュとパフォーマンス

### 5-1. Next.jsのキャッシュ設定

```typescript
// 1時間ごとに再取得
fetch(url, { next: { revalidate: 3600 } })

// 常に最新データを取得（キャッシュなし）
fetch(url, { cache: 'no-store' })

// デフォルトのキャッシュを使用
fetch(url)
```

### 5-2. オンデマンド再検証

`app/api/revalidate/route.ts` を作成：

```typescript
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');

  // セキュリティのための秘密キー確認
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  const path = request.nextUrl.searchParams.get('path');

  if (path) {
    revalidatePath(path);
    return NextResponse.json({ revalidated: true, path });
  }

  return NextResponse.json({ message: 'Missing path' }, { status: 400 });
}
```

GAS側から更新時に呼び出す：

```javascript
// GASに追加
function notifyNextJS() {
  const url = 'https://your-app.vercel.app/api/revalidate?secret=YOUR_SECRET&path=/works';
  UrlFetchApp.fetch(url, { method: 'post' });
}
```

---

## 6. トラブルシューティング

### CORSエラーが発生する場合
GASのデプロイ設定で「全員」にアクセス権限を付与してください。

### データが取得できない場合
1. GASのデプロイURLが正しいか確認
2. `.env.local`が正しく設定されているか確認
3. スプレッドシートのシート名が一致しているか確認（`Works`, `Activities`）

### データが更新されない場合
キャッシュをクリアするか、`revalidate`の値を小さくしてください。

---

## 7. セキュリティ考慮事項

1. **環境変数の管理**: `.env.local`は`.gitignore`に追加
2. **API制限**: GAS側でアクセス制限を設定可能
3. **データ検証**: 取得したデータの型チェックを実施

---

これで、GASを使った作品一覧と活動記録の管理システムが完成です！
