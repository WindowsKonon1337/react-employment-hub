import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { CompanyService, CreateCompanyQueryData } from "@/api/services";
import { Error } from "global";

export const useData = () => {
	const { mutate: handleConfirmForm } = useMutation({
		mutationFn: async (data: CreateCompanyQueryData) => CompanyService.createCompany(data),
		onSuccess: () => {
			toast.success("Your company succes create");
		},
		onError: (error) => {
			const currentError = error as Error;
			toast.error(`${currentError.response?.data.message ?? "Something went wrong"}`);
		},
	});

	return { handleConfirmForm };
};
