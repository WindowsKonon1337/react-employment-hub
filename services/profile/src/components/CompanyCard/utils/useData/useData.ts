import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { Error } from "global";
import { CompanyService } from "@/api/services";

export const useData = () => {
	const { mutate: handleDeleteCompany } = useMutation({
		mutationKey: ["deleteCompany"],
		mutationFn: async (id: string) => CompanyService.deleteCompany(id),
		onSuccess: () => {
			toast.success("Your company succes delete");
		},
		onError: (error) => {
			const currentError = error as Error;
			toast.error(`${currentError.response?.data.message ?? "Something went wrong"}`);
		},
	});

	return {
		handleDeleteCompany,
	};
};
