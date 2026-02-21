import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface SubmitInquiryParams {
  fullName: string;
  email: string;
  phone: string | null;
  travelDates: string | null;
  destination: string;
  numTravelers: bigint;
  budgetRange: string | null;
  message: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: SubmitInquiryParams) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }

      const inquiryId = await actor.submitInquiry(
        params.fullName,
        params.email,
        params.phone,
        params.travelDates,
        params.destination,
        params.numTravelers,
        params.budgetRange,
        params.message
      );

      return inquiryId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}
