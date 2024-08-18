import { useMutation } from "@tanstack/react-query";

import { VacancyService, FiltersResponseData } from "@/api/services";

export const useData = () => {
	const {
		mutate: handleGetVacancies,
		isPending,
		data: vacancies,
	} = useMutation({
		mutationFn: (filtersData: FiltersResponseData) => VacancyService.getVacancies(filtersData),
	});

	const isEmpty = !vacancies || !vacancies.length;

	return { handleGetVacancies, isPending, vacancies, isEmpty };
};
