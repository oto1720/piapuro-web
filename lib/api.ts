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

// フォールバックデータ
const fallbackWorks: Work[] = [
  {
    id: 1,
    title: "夕日の風景",
    artist: "田中 美咲",
    category: "イラスト",
    year: "2024",
    description: "故郷の夕日を描いた水彩画です。温かみのある色彩で表現しました。",
    color: "from-orange-400 to-red-500"
  },
  {
    id: 2,
    title: "春のメロディー",
    artist: "佐藤 健太",
    category: "音楽",
    year: "2024",
    description: "桜をテーマにしたピアノ曲です。穏やかな春の午後をイメージして作曲しました。",
    color: "from-pink-400 to-rose-500"
  },
  {
    id: 3,
    title: "星空の物語",
    artist: "山田 花子",
    category: "小説",
    year: "2023",
    description: "天体観測をする少女の成長を描いた短編小説です。夢と現実の境界を探ります。",
    color: "from-purple-400 to-indigo-500"
  },
  {
    id: 4,
    title: "都市の記憶",
    artist: "鈴木 太郎",
    category: "写真",
    year: "2024",
    description: "変わりゆく街並みを記録したフォトエッセイ。時間の流れを写真で表現しています。",
    color: "from-gray-400 to-slate-500"
  },
  {
    id: 5,
    title: "未来への扉",
    artist: "高橋 由美",
    category: "イラスト",
    year: "2024",
    description: "デジタルペインティングで描いたSF作品。希望に満ちた未来を表現しました。",
    color: "from-blue-400 to-cyan-500"
  },
  {
    id: 6,
    title: "雨音のワルツ",
    artist: "伊藤 誠",
    category: "音楽",
    year: "2023",
    description: "雨の日の静寂をテーマにした楽曲。ピアノとバイオリンの美しい調和をお楽しみください。",
    color: "from-teal-400 to-green-500"
  }
];

const fallbackActivities: Activity[] = [
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