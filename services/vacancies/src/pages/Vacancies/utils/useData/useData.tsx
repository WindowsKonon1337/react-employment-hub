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

	return { handleGetVacancies, isPending, vacancies };
};
