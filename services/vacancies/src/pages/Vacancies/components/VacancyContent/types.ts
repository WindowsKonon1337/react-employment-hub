import { Dispatch, SetStateAction } from "react";

import { VacancyCardData } from "@/components";

export interface VacancyContentProps {
	setIsOnlyPageUpdate: Dispatch<SetStateAction<boolean>>;
	isEmptyData: boolean;
	vacancyItems?: VacancyCardData[] | null;
	isUploadMoreData?: boolean;
	handleUpdateCurrentPage: () => void;
}
