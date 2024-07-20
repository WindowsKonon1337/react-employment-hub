import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { Error } from "@/global";
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
