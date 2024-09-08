import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { usePageInfo } from "@packages/shared/src/hooks";

import { Error } from "global";
import { VacanciesService } from "@/api/services";
import { VacancyCardData } from "@/components";

import { UseDataParams } from "./types";

export const useData = ({ companyId }: UseDataParams) => {
	const {
		handleUpdateCurrentPage,
		pageInfo: { pageInfo },
	} = usePageInfo();

	const [currentData, setCurrentData] = useState<VacancyCardData[]>([]);
	const [isChangePagePending, setIsChangePagePending] = useState(false);

	const { isPending, mutate: handleGetData } = useMutation({
		mutationKey: ["localVacancy"],
		mutationFn: async (page: number) => VacanciesService.getVacancyiesForCompany(companyId, page),
		onSuccess: (data) => {
			if (currentData.length && isChangePagePending && data.length) {
				setCurrentData((prev) => [...prev, ...data]);
			} else {
				setCurrentData(data);
			}
			setIsChangePagePending(false);
		},
		onError: (error: Error) => {
			toast.error(error.response?.data.message ?? "Something went wrong");
		},
	});

	const handleUploadMore = () => {
		handleUpdateCurrentPage(pageInfo.page + 1);
		handleGetData(pageInfo.page);
		setIsChangePagePending(true);
	};

	const handleDeleteItem = (id: string) => {
		const newData = currentData.filter((curItemData) => curItemData.id !== id);

		setCurrentData(newData);
	};

	const handleUpdateData = (id: string, newData: VacancyCardData) => {
		const updatedData = currentData.map((currentDataItem) =>
			currentDataItem.id === id ? { ...newData } : { ...currentDataItem },
		);

		setCurrentData(updatedData);
	};

	const isChangePageLoadingData = isPending && isChangePagePending;
	const isFullLoadingPage = isPending && !isChangePageLoadingData;

	return {
		currentData,
		handleGetData,
		handleUploadMore,
		handleDeleteItem,
		handleUpdateData,
		isFullLoadingPage,
		isChangePageLoadingData,
	};
};
