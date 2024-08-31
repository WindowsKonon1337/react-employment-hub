import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { usePageInfo } from "@packages/shared/src/hooks";

import { PeopleResponseService } from "@/api/services";

import { ResponseParams } from "../../components/Response/types";

export const useData = () => {
	const {
		pageInfo: { pageInfo },
		handleUpdateCurrentPage,
	} = usePageInfo();

	const [isOnlyPageChange, setIsOnlyPageChange] = useState(false);

	const [currentData, setCurrentData] = useState<ResponseParams[]>([]);

	const { mutate: handleGetData, isPending } = useMutation({
		mutationKey: ["responsesCards"],
		mutationFn: async (): Promise<ResponseParams[]> =>
			PeopleResponseService.getResponseHistory(pageInfo.page),
		onSuccess: (newData) => {
			console.log(newData);
			if (currentData.length && isOnlyPageChange) {
				setCurrentData((prev) => (newData.length ? [...prev, ...newData] : prev));
			} else {
				setCurrentData(newData);
			}
			setIsOnlyPageChange(false);
		},
	});

	const handleUploadMoreData = () => {
		handleUpdateCurrentPage(pageInfo.page + 1);
		setIsOnlyPageChange(true);
		handleGetData();
	};

	const isFullPagePending = isPending && !isOnlyPageChange;
	const isOnlyPageDataPending = isPending && isOnlyPageChange;

	return {
		responsesCard: currentData,
		isOnlyPageDataPending,
		isFullPagePending,
		handleUploadMoreData,
		handleGetData,
	};
};
