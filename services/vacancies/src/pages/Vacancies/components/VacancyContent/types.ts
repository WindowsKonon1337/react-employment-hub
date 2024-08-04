import { VacnacyCardProps } from "@/components";

export interface VacancyContentProps {
	vacancyItems: VacnacyCardProps[];
	isEmptyData: boolean;
	handleUpdateCurrentPage: () => void;
}
