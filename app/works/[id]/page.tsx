import { notFound } from 'next/navigation';
import { getWorkById } from '@/lib/api';
import { WorkDetailRouteClient } from '@/components/WorkDetailRouteClient';

interface WorkDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { id } = await params;
  const workId = Number(id);

  if (Number.isNaN(workId)) {
    notFound();
  }

  const work = await getWorkById(workId);

  if (!work) {
    notFound();
  }

  return <WorkDetailRouteClient work={work} />;
}
