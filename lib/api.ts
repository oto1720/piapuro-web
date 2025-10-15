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

export interface Work {
  id: number;
  title: string;
  artist: string;
  category: string;
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
    title: "夕日の風景",
    artist: "田中 美咲",
    category: "イラスト",
    year: "2024",
    description: "故郷の夕日を描いた水彩画です。温かみのある色彩で表現しました。",
    technology: "水彩画",
    works: "https://example.com/works/1",
    image: ""
  },
  {
    id: 2,
    title: "春のメロディー",
    artist: "佐藤 健太",
    category: "音楽",
    year: "2024",
    description: "桜をテーマにしたピアノ曲です。穏やかな春の午後をイメージして作曲しました。",
    technology: "ピアノ作曲",
    works: "https://example.com/works/2",
    image: ""
  },
  {
    id: 3,
    title: "星空の物語",
    artist: "山田 花子",
    category: "小説",
    year: "2023",
    description: "天体観測をする少女の成長を描いた短編小説です。夢と現実の境界を探ります。",
    technology: "文章創作",
    works: "https://example.com/works/3",
    image: ""
  },
  {
    id: 4,
    title: "都市の記憶",
    artist: "鈴木 太郎",
    category: "写真",
    year: "2024",
    description: "変わりゆく街並みを記録したフォトエッセイ。時間の流れを写真で表現しています。",
    technology: "デジタル写真",
    works: "https://example.com/works/4",
    image: ""
  },
  {
    id: 5,
    title: "未来への扉",
    artist: "高橋 由美",
    category: "イラスト",
    year: "2024",
    description: "デジタルペインティングで描いたSF作品。希望に満ちた未来を表現しました。",
    technology: "デジタルペインティング",
    works: "https://example.com/works/5",
    image: ""
  },
  {
    id: 6,
    title: "雨音のワルツ",
    artist: "伊藤 誠",
    category: "音楽",
    year: "2023",
    description: "雨の日の静寂をテーマにした楽曲。ピアノとバイオリンの美しい調和をお楽しみください。",
    technology: "DTM・編曲",
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