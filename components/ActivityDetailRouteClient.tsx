'use client';

import { useRouter } from 'next/navigation';
import type { Activity } from '@/lib/api';
import ActivityDetailModal from './ActivityDetailModal';

export function ActivityDetailRouteClient({ activity }: { activity: Activity }) {
  const router = useRouter();
  return <ActivityDetailModal activity={activity} onClose={() => router.push('/activities')} />;
}
