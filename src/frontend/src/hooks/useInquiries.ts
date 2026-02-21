import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Inquiry } from '../backend';

export function useInquiries() {
  const { actor, isFetching } = useActor();

  return useQuery<Inquiry[]>({
    queryKey: ['inquiries'],
    queryFn: async () => {
      if (!actor) return [];
      const inquiries = await actor.getAllInquiries();
      return inquiries.sort((a, b) => Number(b.timestamp - a.timestamp));
    },
    enabled: !!actor && !isFetching,
  });
}
