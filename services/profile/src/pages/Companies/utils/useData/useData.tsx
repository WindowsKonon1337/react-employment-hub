import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { usePageInfo } from "@packages/shared/src/hooks";

import { CompanyService } from "@/api/services";
import { CompanyCardData } from "@/components";
import { Error } from "global";

export const useData = () => {
	const {
		handleUpdateCurrentPage,
		pageInfo: { pageInfo },
	} = usePageInfo();
	const [comapniesCards, setCompaniesCards] = useState<CompanyCardData[] | []>([]);
	const [isChangePagePending, setIsChangePagePending] = useState(false);

	const { mutate: handleGetLocalCompanies, isPending } = useMutation({
		mutationFn: async (page: number) => CompanyService.getAll(page),
		onSuccess: (data) => {
			if (comapniesCards.length > 0 && isChangePagePending) {
				setCompaniesCards((prev) => (data.length ? [...prev, ...data] : [...prev]));
			} else {
				setCompaniesCards(data);
			}
			setIsChangePagePending(false);
		},
		onError: (error: Error) => {
			toast.error(error.response?.data.message ?? "Something went wrong");
		},
	});

	const handleGetCompany = () => {
		handleUpdateCurrentPage(pageInfo.page + 1);
		handleGetLocalCompanies(pageInfo.page);
	};

	const isFullPagePending = isPending && !isChangePagePending;
	const isChangePageDataPending = isPending && isChangePagePending;

	return {
		handleGetLocalCompanies,
		handleGetCompany,
		isFullPagePending,
		isChangePageDataPending,
		comapniesCards,
	};
};
