import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { VacanciesService } from "@/api/services";
import { Error } from "global";

import { CreateVacancyParams } from "../../types";

export const useData = () => {
	const { mutate: handleCreateVacancy } = useMutation({
		mutationFn: async (data: CreateVacancyParams) => VacanciesService.create(data),
		onSuccess: () => {
			toast.success("Vacancy succes created");
		},
		onError: (error: Error) => {
			toast.error(error.response?.data.message ?? "Something went wrong");
		},
	});

	return { handleCreateVacancy };
};
