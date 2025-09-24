import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サークルについて - ピアプロサークル',
  description: '福大ピアプロの歴史、理念、活動内容について詳しくご紹介します。',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            サークルについて
          </h1>
          <p className="text-xl text-gray-700">
            私たちの歩みと理念をご紹介します
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">私たちの理念</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              福大ピアプロは、創作活動を通じて個人の成長と仲間との絆を深めることを目的として設立されました。
              切磋琢磨しながら質の高い作品作りを目指しています。
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">サークルの歴史</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-blue-600 font-semibold">2020年</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">サークル設立</h3>
                    <p className="text-gray-600">創作好きの学生5人で活動を開始</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-blue-600 font-semibold">2021年</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">初の作品展開催</h3>
                    <p className="text-gray-600">学内で初めての作品展を成功させる</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-blue-600 font-semibold">2022年</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">メンバー拡充</h3>
                    <p className="text-gray-600">20名を超えるメンバーが参加</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-blue-600 font-semibold">2024年</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">活動の多様化</h3>
                    <p className="text-gray-600">イラスト、音楽、小説など多分野での活動を展開</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">活動内容</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">定期勉強会</h3>
                <p className="text-gray-600">
                  毎週土曜日に開催される勉強会では、技術共有や作品レビューを行います。
                  お互いの技術を高め合う貴重な時間です。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">作品制作</h3>
                <p className="text-gray-600">
                  個人制作からチーム制作まで、様々な形で創作活動を行います。
                  ジャンルは問わず、自由な発想で作品を生み出しています。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">作品展示</h3>
                <p className="text-gray-600">
                  年2回の作品展では、メンバーの作品を一般公開します。
                  来場者からの感想も励みになっています。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">交流イベント</h3>
                <p className="text-gray-600">
                  新歓イベントや親睦会を通じて、メンバー同士の絆を深めています。
                  創作以外の時間も大切にしています。
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">活動場所・時間</h2>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">活動場所</h3>
                  <p className="text-gray-600">〇〇大学 学生会館2F 第3会議室</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">活動時間</h3>
                  <p className="text-gray-600">毎週土曜日 14:00〜17:00</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">活動費</h3>
                  <p className="text-gray-600">月額 1,000円（会場費・材料費込み）</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">メンバー数</h3>
                  <p className="text-gray-600">現在25名（2024年12月時点）</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">メッセージ</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <p className="text-gray-700 text-lg leading-relaxed italic">
                「創作は一人でも楽しいものですが、仲間がいることでより深く、より広がりを持った活動になります。
                技術的な向上だけでなく、人としても成長できる場所がピアプロサークルです。
                新しい仲間をいつでもお待ちしています。」
              </p>
              <p className="text-right text-gray-600 font-semibold mt-4">
                — サークル代表
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}