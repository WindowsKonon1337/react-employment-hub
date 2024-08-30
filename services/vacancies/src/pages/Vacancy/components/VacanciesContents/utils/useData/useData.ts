import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { VacancyService } from "@/api/services";
import { VacancyCardData } from "@/components";
import { usePageInfo } from "@/reducer";
import { useFiltersContext } from "@/state";

export const useData = () => {
	const { filters } = useFiltersContext();
	const {
		pageInfo: { pageInfo },
		handleUpdateCurrentPage,
	} = usePageInfo();

	const [currentData, setCurrentData] = useState<VacancyCardData[]>([]);

	const { mutate: handleGetVacancies, isPending } = useMutation({
		mutationKey: ["getSimilarVacancy"],
		mutationFn: () => VacancyService.getVacancies({ filters: filters.filters }),
		onSuccess: ({ data }) => {
			setCurrentData((prev) => (prev.length ? [...prev, ...data] : data));
		},
	});

	useEffect(() => {
		handleGetVacancies();
	}, [pageInfo.page, handleGetVacancies]);

	return { handleUpdateCurrentPage, handleGetVacancies, isPending, data: currentData, pageInfo };
};
