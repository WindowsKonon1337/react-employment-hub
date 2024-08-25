import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { VacancyService, FiltersResponseData } from "@/api/services";
import { VacnacyCardProps } from "@/components";

import { UseDataParams } from "./types";

export const useData = ({ filters, pageInfo }: UseDataParams) => {
	const { page, size, sorts } = pageInfo.pageInfo || {};
	// TODO: переименовать название типа
	const [currentData, setCurrentData] = useState<VacnacyCardProps[]>([]);
	const [isOnlyPageChange, setIsOnlyPageChange] = useState(false);

	const { mutate: handleGetVacancies, isPending } = useMutation({
		// TODO: класть pageInfo в query параметры
		mutationFn: (filtersData: FiltersResponseData) => VacancyService.getVacancies(filtersData),
		onSuccess: ({ data }) => {
			if (data.length > 0 && isOnlyPageChange) {
				setCurrentData((prev) => (prev.length > 0 ? [...prev, ...data] : data));
			} else {
				setCurrentData(data);
			}
			setIsOnlyPageChange(false);
		},
	});

	useEffect(() => {
		// if (filters.filters) {
		// 	handleGetVacancies({ filters: filters.filters });
		// }
		handleGetVacancies({ filters: filters.filters });
	}, [page, size, sorts, filters.filters]);

	const isEmpty = !currentData.length;

	const isFullLoading = !isOnlyPageChange && isPending;
	const isUploadMoreData = isOnlyPageChange && isPending;

	return {
		handleGetVacancies,
		isPending,
		vacancies: currentData,
		isEmpty,
		isFullLoading,
		isUploadMoreData,
		setIsOnlyPageChange,
	};
};
