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
  category: string;
  description: string;
  participants: number;
  active: string;
  image: string;
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
    title: "冬のイラスト展開催",
    category: "イベント",
    description: "メンバーが制作したイラスト作品の展示会を開催しました。今回は「冬」をテーマに、15点の作品を展示。多くの来場者に恵まれ、作品に対する感想やアドバイスをいただくことができました。",
    participants: 20,
    active: "https://example.com/activities/1",
    image: ""
  },
  {
    id: 2,
    year: "2024",
    title: "新メンバー歓迎会",
    category: "交流",
    description: "12月に新しく加わった5名のメンバーを迎えて歓迎会を開催しました。自己紹介タイムでは、それぞれの創作への想いを聞かせてもらい、これからの活動がより一層楽しみになりました。",
    participants: 25,
    active: "https://example.com/activities/2",
    image: ""
  },
  {
    id: 3,
    year: "2024",
    title: "デジタルアート勉強会",
    category: "勉強会",
    description: "デジタルペインティングの基礎から応用まで、プロのイラストレーターの方を講師にお招きして勉強会を開催しました。実際に手を動かしながら学ぶことで、多くのメンバーが新しい技術を身につけることができました。",
    participants: 18,
    active: "https://example.com/activities/3",
    image: ""
  },
  {
    id: 4,
    year: "2024",
    title: "ハロウィン作品コンテスト",
    category: "コンテスト",
    description: "ハロウィンをテーマにした作品コンテストを開催しました。イラスト、音楽、小説の3部門で計22作品の応募があり、どれも力作揃いでした。投票の結果、各部門の優秀作品を決定しました。",
    participants: 22,
    active: "https://example.com/activities/4",
    image: ""
  },
  {
    id: 5,
    year: "2024",
    title: "音楽制作ワークショップ",
    category: "勉強会",
    description: "DTMソフトを使った音楽制作のワークショップを開催しました。基本的な楽曲制作から、エフェクトの使い方まで幅広くカバー。参加者全員が短い楽曲を完成させることができました。",
    participants: 12,
    active: "https://example.com/activities/5",
    image: ""
  },
  {
    id: 6,
    year: "2024",
    title: "秋の作品発表会",
    category: "イベント",
    description: "夏の間に制作した作品の発表会を開催しました。イラスト、音楽、小説、写真など多様なジャンルの作品が集まり、お互いの創作活動を讃え合う素晴らしい時間となりました。",
    participants: 28,
    active: "https://example.com/activities/6",
    image: ""
  }
];

export async function getWorksFromGAS(): Promise<Work[]> {
  // 環境変数が設定されていない場合はフォールバックデータを返す
  if (!GAS_API_URL) {
    console.warn('GAS_API_URL is not set. Using fallback data.');
    return fallbackWorks;
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
      return result.data;
    } else {
      console.warn('No works data from GAS. Using fallback data.');
      return fallbackWorks;
    }
  } catch (error) {
    console.error('Error fetching works:', error);
    return fallbackWorks;
  }
}

export async function getActivitiesFromGAS(): Promise<Activity[]> {
  // 環境変数が設定されていない場合はフォールバックデータを返す
  if (!GAS_API_URL) {
    console.warn('GAS_API_URL is not set. Using fallback data.');
    return fallbackActivities;
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
      return result.data;
    } else {
      console.warn('No activities data from GAS. Using fallback data.');
      return fallbackActivities;
    }
  } catch (error) {
    console.error('Error fetching activities:', error);
    return fallbackActivities;
  }
}