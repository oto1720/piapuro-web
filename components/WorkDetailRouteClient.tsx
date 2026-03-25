'use client';

import { useRouter } from 'next/navigation';
import type { Work } from '@/lib/api';
import WorkDetailModal from './WorkDetailModal';

export function WorkDetailRouteClient({ work }: { work: Work }) {
  const router = useRouter();
  return <WorkDetailModal work={work} onClose={() => router.push('/works')} />;
}
