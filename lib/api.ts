// Google DriveのリンクをWebビューアブルな直接リンクに変換
export function convertDriveLinkToDirect(url: string): string {
  if (!url) return '';

  // 既に直接リンクの形式なら、そのまま返す
  if (url.includes('drive.google.com/uc?')) {
    return url;
  }

  // 共有リンクからファイルIDを抽出
  // 形式: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);

  if (match && match[1]) {
    const fileId = match[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }

  // マッチしない場合は元のURLを返す
  return url;
}

// 作品カテゴリーの定義
export type WorkCategory = 'モバイルアプリ' | 'Webアプリ' | 'ゲーム' | 'イラスト' | '他';

// 活動カテゴリーの定義
export type ActivityCategory = 'モクモク会' | 'ハッカソン' | '展示会' | '懇親会' | 'イベント';

export interface Work {
  id: number;
  title: string;
  artist: string;
  category: WorkCategory | string; // string も許可（既存データとの互換性のため）
  year: string;
  description: string;
  technology: string;
  works: string;
  image: string;
}

export interface Activity {
  id: number;
  year: string;
  title: string;
  category: ActivityCategory | string; // string も許可（既存データとの互換性のため）
  description: string;
  participants: number;
  active: string;
  image: string;
}

/** 空文字・空白のみ・未登録はボタンを出さない（スプレッドシート由来の " " 等も除外） */
export function hasExternalLink(value: unknown): boolean {
  if (value == null) return false;
  const s = typeof value === 'string' ? value : String(value);
  return s.trim().length > 0;
}

/** GAS や JSON 由来で id が文字列になる場合があるため統一する */
function normalizeWork(raw: Work): Work {
  return { ...raw, id: Number(raw.id) };
}

function normalizeActivity(raw: Activity): Activity {
  return {
    ...raw,
    id: Number(raw.id),
    participants: Number(raw.participants),
  };
}

const GAS_API_URL = process.env.NEXT_PUBLIC_GAS_API_URL;

// フォールバックデータ
const fallbackWorks: Work[] = [
  {
    id: 1,
    title: "タスク管理アプリ",
    artist: "田中 美咲",
    category: "モバイルアプリ",
    year: "2024",
    description: "直感的なUIで日々のタスクを管理できるモバイルアプリです。ReactNativeで開発しました。",
    technology: "React Native, TypeScript",
    works: "https://example.com/works/1",
    image: ""
  },
  {
    id: 2,
    title: "ポートフォリオサイト",
    artist: "佐藤 健太",
    category: "Webアプリ",
    year: "2024",
    description: "クリエイター向けのポートフォリオサイト。Next.jsとTailwind CSSで構築しました。",
    technology: "Next.js, Tailwind CSS",
    works: "https://example.com/works/2",
    image: ""
  },
  {
    id: 3,
    title: "パズルゲーム",
    artist: "山田 花子",
    category: "ゲーム",
    year: "2023",
    description: "脳トレに最適なパズルゲーム。Unityで制作し、スマートフォンとPCの両方で遊べます。",
    technology: "Unity, C#",
    works: "https://example.com/works/3",
    image: ""
  },
  {
    id: 4,
    title: "都市の風景",
    artist: "鈴木 太郎",
    category: "イラスト",
    year: "2024",
    description: "デジタルペインティングで描いた都市風景。夕暮れ時の街並みを表現しました。",
    technology: "Procreate, Adobe Photoshop",
    works: "https://example.com/works/4",
    image: ""
  },
  {
    id: 5,
    title: "データ分析ツール",
    artist: "高橋 由美",
    category: "Webアプリ",
    year: "2024",
    description: "ビジネスデータを可視化するWebアプリケーション。グラフやチャートで分かりやすく表示します。",
    technology: "React, D3.js, Python",
    works: "https://example.com/works/5",
    image: ""
  },
  {
    id: 6,
    title: "音楽プレイヤー",
    artist: "伊藤 誠",
    category: "他",
    year: "2023",
    description: "シンプルで使いやすい音楽プレイヤーアプリ。プレイリスト機能やイコライザーを搭載しています。",
    technology: "Electron, Node.js",
    works: "https://example.com/works/6",
    image: ""
  }
];

const fallbackActivities: Activity[] = [
  {
    id: 1,
    year: "2024",
    title: "冬の作品展示会",
    category: "展示会",
    description: "メンバーが制作した作品の展示会を開催しました。モバイルアプリ、Webアプリ、ゲームなど多様なジャンルの作品を展示。多くの来場者に恵まれ、作品に対する感想やアドバイスをいただくことができました。",
    participants: 35,
    active: "https://example.com/activities/1",
    image: ""
  },
  {
    id: 2,
    year: "2024",
    title: "新メンバー歓迎懇親会",
    category: "懇親会",
    description: "12月に新しく加わった8名のメンバーを迎えて懇親会を開催しました。自己紹介タイムでは、それぞれの技術スタックや興味のあるプロジェクトについて話し合い、これからの活動がより一層楽しみになりました。",
    participants: 28,
    active: "https://example.com/activities/2",
    image: ""
  },
  {
    id: 3,
    year: "2024",
    title: "週末もくもく会",
    category: "モクモク会",
    description: "各自が取り組んでいるプロジェクトを持ち寄って作業するもくもく会を開催しました。作業の合間に技術的な相談をしたり、進捗を共有したりと、集中しながらも楽しい雰囲気で開発を進めることができました。",
    participants: 15,
    active: "https://example.com/activities/3",
    image: ""
  },
  {
    id: 4,
    year: "2024",
    title: "秋のハッカソン大会",
    category: "ハッカソン",
    description: "48時間でアプリを開発するハッカソンを開催しました。5チームが参加し、テーマ「地域課題解決」に沿った様々なアプリが生まれました。どのチームも完成度が高く、審査員も選考に悩むほどでした。",
    participants: 22,
    active: "https://example.com/activities/4",
    image: ""
  },
  {
    id: 5,
    year: "2024",
    title: "学園祭出展イベント",
    category: "イベント",
    description: "学園祭にてサークル展示ブースを出展しました。メンバーの作品デモや体験会を実施し、多くの来場者に楽しんでいただきました。新規メンバーの獲得にもつながる良い機会となりました。",
    participants: 42,
    active: "https://example.com/activities/5",
    image: ""
  },
  {
    id: 6,
    year: "2024",
    title: "夏季集中もくもく会",
    category: "モクモク会",
    description: "夏休みを利用した3日間の集中もくもく会を開催しました。各自が夏休みの目標として掲げたプロジェクトに取り組み、最終日には成果発表会を実施。充実した3日間となりました。",
    participants: 18,
    active: "https://example.com/activities/6",
    image: ""
  }
];

export async function getWorksFromGAS(): Promise<Work[]> {
  // 環境変数が設定されていない場合はフォールバックデータを返す
  if (!GAS_API_URL) {
    console.warn('GAS_API_URL is not set. Using fallback data.');
    return fallbackWorks.map(normalizeWork);
  }

  try {
    const response = await fetch(`${GAS_API_URL}?type=works`, {
      next: { revalidate: 3600 } // 1時間キャッシュ
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch works: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Works API response:', result);

    // GASのレスポンス形式: {success: true, data: [...], count: N}
    if (result.success && result.data && result.data.length > 0) {
      return result.data.map((row: Work) => normalizeWork(row));
    } else {
      console.warn('No works data from GAS. Using fallback data.');
      return fallbackWorks.map(normalizeWork);
    }
  } catch (error) {
    console.error('Error fetching works:', error);
    return fallbackWorks.map(normalizeWork);
  }
}

export async function getActivitiesFromGAS(): Promise<Activity[]> {
  // 環境変数が設定されていない場合はフォールバックデータを返す
  if (!GAS_API_URL) {
    console.warn('GAS_API_URL is not set. Using fallback data.');
    return fallbackActivities.map(normalizeActivity);
  }

  try {
    const response = await fetch(`${GAS_API_URL}?type=activities`, {
      next: { revalidate: 3600 } // 1時間キャッシュ
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch activities: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Activities API response:', result);

    // GASのレスポンス形式: {success: true, data: [...], count: N}
    if (result.success && result.data && result.data.length > 0) {
      return result.data.map((row: Activity) => normalizeActivity(row));
    } else {
      console.warn('No activities data from GAS. Using fallback data.');
      return fallbackActivities.map(normalizeActivity);
    }
  } catch (error) {
    console.error('Error fetching activities:', error);
    return fallbackActivities.map(normalizeActivity);
  }
}

export async function getWorkById(id: number): Promise<Work | null> {
  if (!Number.isFinite(id)) return null;
  const works = await getWorksFromGAS();
  return works.find((w) => Number(w.id) === id) ?? null;
}

export async function getActivityById(id: number): Promise<Activity | null> {
  if (!Number.isFinite(id)) return null;
  const activities = await getActivitiesFromGAS();
  return activities.find((a) => Number(a.id) === id) ?? null;
}