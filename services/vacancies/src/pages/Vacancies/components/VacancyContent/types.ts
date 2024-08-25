import { VacnacyCardProps } from "@/components";
import { Dispatch, SetStateAction } from "react";

export interface VacancyContentProps {
	setIsOnlyPageUpdate: Dispatch<SetStateAction<boolean>>;
	isEmptyData: boolean;
	vacancyItems?: VacnacyCardProps[] | null;
	isUploadMoreData?: boolean;
	handleUpdateCurrentPage: () => void;
}
