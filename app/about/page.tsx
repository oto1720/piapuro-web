import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サークルについて - ピアプロサークル',
  description: '福大ピアプロの歴史、理念、活動内容について詳しくご紹介します。',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-gray-900 mb-8 tracking-tight">
            About
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            私たちの歩みと理念をご紹介します
          </p>
        </div>
      </section>

      {/* 理念セクション */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              私たちの理念
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">好きなことを通して成長する</h3>
                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">好きなことを各自が自由にやっているサークルです。好きなことで成長できたら、ラッキー。</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">情熱を無駄にしない</h3>
                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">プログラミングやゲーム開発などに挑戦したいけれど、何から始めればいいか分からない人の手助けをしたい。</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">すぐに行動する</h3>
                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">やりたい事があれば、すぐに自分から行動しましょう。</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">私たちは対等な関係</h3>
                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">学年に関係なく、気楽にフラットに接しましょう。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 歴史セクション */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              サークルの歩み
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {[
                {
                  year: "2023",
                  title: "サークル設立",
                  description: "プロプロという名前で活動"
                },
                {
                  year: "2024",
                  title: "プロプロからピアプロに変更",
                  description: "ピアサポートとの合併"
                },
                {
                  year: "2025",
                  title: "メンバー拡充",
                  description: "20名を超えるメンバーが参加"
                },
                {
                  year: "2025",
                  title: "さまざまなイベントに参加",
                  description: "ハッカソンや展示会等に積極的に参加"
                }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gray-50 rounded-3xl flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                        <div className="text-2xl font-light text-gray-900">{item.year}</div>
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-600 font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 活動内容セクション */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              活動内容
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "定期勉強会",
                description: "毎週２回の集まりで、チーム開発やLT会を行なっています"
              },
              {
                title: "作品制作",
                description: "個人制作からチーム制作まで、様々な形で創作活動を行います。ジャンルは問わず、自由な発想で作品を生み出しています。"
              },
              {
                title: "作品展示",
                description: "年2回ほどの作品展では、メンバーの作品を一般公開します。来場者からの感想も励みになっています。"
              },
              {
                title: "交流イベント",
                description: "新歓イベントや親睦会を通じて、メンバー同士の絆を深めています。創作以外の時間も大切にしています。"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 詳細情報セクション */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              活動詳細
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "活動場所",
                value: "福岡大学\n14号館 3階s"
              },
              {
                title: "活動時間",
                value: "毎週月曜日、木曜日\n18:00〜20:00"
              },
              {
                title: "活動費",
                value: "今の所はないです"
              },
              {
                title: "メンバー数",
                value: "現在25名\n(Discordは100名以上)"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light whitespace-pre-line">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* メッセージセクション */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-100 rounded-3xl p-12">
              <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed italic mb-8">
                「創作は一人でも楽しいものですが、仲間がいることでより深く、より広がりを持った活動になります。
                技術的な向上だけでなく、人としても成長できる場所が福大ピアプロです。
                新しい仲間をいつでもお待ちしています。」
              </p>
              <p className="text-gray-600 font-light">
                — サークル代表
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}