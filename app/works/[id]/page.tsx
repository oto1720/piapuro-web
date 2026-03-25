import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getWorksFromGAS } from '@/lib/api';

interface WorkDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { id } = await params;
  const workId = Number(id);

  if (Number.isNaN(workId)) {
    notFound();
  }

  const works = await getWorksFromGAS();
  const work = works.find((item) => item.id === workId);

  if (!work) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Link
          href="/works"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          ← 作品一覧へ戻る
        </Link>

        <article className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative min-h-[320px] lg:min-h-[520px] bg-gray-100">
              {work.image ? (
                <Image
                  src={work.image}
                  alt={work.title}
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

            <div className="p-8 md:p-12 lg:p-14">
              <div className="flex items-center gap-3 flex-wrap mb-5">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                  {work.category}
                </span>
                <span className="text-sm text-gray-500">{work.year}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
                {work.title}
              </h1>

              <p className="text-base md:text-lg text-gray-600 font-light mb-3">
                作者: {work.artist}
              </p>

              {work.technology && (
                <p className="text-base md:text-lg text-gray-600 font-light mb-8">
                  技術: {work.technology}
                </p>
              )}

              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {work.description}
              </p>

              {work.works && (
                <div className="mt-10">
                  <a
                    href={work.works}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105"
                  >
                    作品リンクを見る
                  </a>
                </div>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
