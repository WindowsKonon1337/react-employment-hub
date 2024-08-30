import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { PeopleResponseService } from "@/api/services";

import { ResponseParams } from "../../components/Response/types";

export const useData = () => {
	const [currentPage, setCurrentPage] = useState(0);

	const [currentData, setCurrentData] = useState<ResponseParams[]>([]);

	const { mutate: handleGetData, isPending } = useMutation({
		mutationKey: ["responsesCards"],
		mutationFn: async (): Promise<ResponseParams[]> =>
			PeopleResponseService.getResponseHistory(currentPage),
		onSuccess: (newData) => {
			if (currentData.length) {
				setCurrentData((prev) => (newData.length ? [...prev, ...newData] : prev));
			} else {
				setCurrentData(newData);
			}
		},
		// onError: (error: Error) => {
		// 	toast.error("");
		// },
	});

	const handleUpalodeMoreData = () => {
		setCurrentPage((prev) => (prev += 1));
		handleGetData();
	};

	return {
		responsesCard: currentData,
		isPending,
		setCurrentPage,
		handleUpalodeMoreData,
		handleGetData,
	};
};
