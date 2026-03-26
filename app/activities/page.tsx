import { Metadata } from 'next';
import { getActivitiesFromGAS } from '@/lib/api';
import ActivitiesClient from './ActivitiesClient';

export const metadata: Metadata = {
  title: '活動記録',
  description: '福大ピアプロの活動記録や過去のイベント情報をご紹介します。',
};

export default async function Activities() {
  const activities = await getActivitiesFromGAS();

  return <ActivitiesClient activities={activities} />;
}