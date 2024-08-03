import { useMutation } from "@tanstack/react-query";

import { LocationService } from "@/api/services";

export const useData = () => {
	const {
		data,
		isPending,
		mutate: handleGetAdditionalVarinats,
	} = useMutation({
		mutationFn: async (location: string) => LocationService.getLocation(location),
	});

	return { data, isPending, handleGetAdditionalVarinats };
};
