import { useSuspense } from 'rest-hooks';

import { BreakdownResource } from 'api/resources/Stats/Breakdown';
import { usePath } from 'hooks/usePath';

export default function SessionOverview() {
  const sessionId = usePath('sessionId');
  const breakdown = useSuspense(BreakdownResource.list(), { sessionId });
  const { overview } = breakdown;
  return (
    <ul>
      <li>Started: {overview.startDate}</li>
      <li>Duration: {overview.duration}</li>
      <li>Data Collections: {overview.counts.datacollections}</li>
    </ul>
  );
}
