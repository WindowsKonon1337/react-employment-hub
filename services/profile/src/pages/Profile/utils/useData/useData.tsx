import toast from "react-hot-toast";
import { useMutation, useQuery } from "@tanstack/react-query";

import { ProfileInfoService, ProfileRequestInfoData } from "@/api/services";
import { Error } from "global";

export const useData = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["getInfo"],
		queryFn: () => ProfileInfoService.getInfo(),
	});

	const { mutate: handleUpdateData, isPending } = useMutation({
		mutationFn: (data: ProfileRequestInfoData) => ProfileInfoService.updatedInfo(data),
		onSuccess: () => {
			toast.success("your data has been successfully updated");
		},
		onError: (error) => {
			const currentError = error as Error;
			toast.error(`${currentError.response?.data.message}`);
		},
	});

	const hasLoading = isLoading || isPending;

	return {
		profileIndoData: data,
		isLoadingProfileInfo: isLoading,
		handleUpdateData,
		isPending,
		hasLoading,
	};
};
