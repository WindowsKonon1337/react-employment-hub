import { VacnacyCardProps } from "@/components";

export interface VacancyContentProps {
	vacancyItems?: VacnacyCardProps[] | null;
	isEmptyData: boolean;
	handleUpdateCurrentPage: () => void;
}
