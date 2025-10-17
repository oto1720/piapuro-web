import { getWorksFromGAS } from '@/lib/api';
import WorksClient from './WorksClient';

export default async function Works() {
  const works = await getWorksFromGAS();

  return <WorksClient initialWorks={works} />;
}