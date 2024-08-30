import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { VacancyResponseData, VacancyService } from "@/api/services";
import { VacancyCardData } from "@/components";

import { UseDataParams } from "./types";
import { getParams } from "./getParams";

export const useData = ({ filters, pageInfo }: UseDataParams) => {
	const { page, size, sorts } = pageInfo.pageInfo || {};
	// TODO: переименовать название типа
	const [currentData, setCurrentData] = useState<VacancyCardData[]>([]);
	const [isOnlyPageChange, setIsOnlyPageChange] = useState(false);

	const { mutate: handleGetVacancies, isPending } = useMutation({
		mutationFn: (data: VacancyResponseData) => VacancyService.getVacancies(data),
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
		if (filters.filters != undefined) {
			const serachParams = getParams(pageInfo);

			handleGetVacancies({ filters: filters.filters, params: serachParams });
		}
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
