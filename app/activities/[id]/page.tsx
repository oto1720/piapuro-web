import { notFound } from 'next/navigation';
import { getActivityById } from '@/lib/api';
import { ActivityDetailRouteClient } from '@/components/ActivityDetailRouteClient';

interface ActivityDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ActivityDetailPage({ params }: ActivityDetailPageProps) {
  const { id } = await params;
  const activityId = Number(id);

  if (Number.isNaN(activityId)) {
    notFound();
  }

  const activity = await getActivityById(activityId);

  if (!activity) {
    notFound();
  }

  return <ActivityDetailRouteClient activity={activity} />;
}
