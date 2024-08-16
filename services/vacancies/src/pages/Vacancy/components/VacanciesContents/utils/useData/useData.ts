import { VacancyService } from "@/api/services";
import { VacnacyCardProps } from "@/components";
import { usePageInfo } from "@/reducer";
import { useFiltersContext } from "@/state";

import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useData = () => {
	const { filters } = useFiltersContext();
	const {
		pageInfo: { pageInfo },
		handleUpdateCurrentPage,
	} = usePageInfo();

	const [currentData, setCurrentData] = useState<VacnacyCardProps[]>([]);

	const { mutate: handleGetVacancies, isPending } = useMutation({
		mutationKey: ["getSimilarVacancy"],
		mutationFn: () => VacancyService.getVacancies({ filters: filters.filters, pageInfo: pageInfo }),
		onSuccess: (vacnaciesData) => {
			setCurrentData((prev) => (prev.length ? [...prev, ...vacnaciesData] : vacnaciesData));
		},
	});

	useEffect(() => {
		handleGetVacancies();
	}, [pageInfo.page, handleGetVacancies]);

	return { handleUpdateCurrentPage, handleGetVacancies, isPending, data: currentData, pageInfo };
};
