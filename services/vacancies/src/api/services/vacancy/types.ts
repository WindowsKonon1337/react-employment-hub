import { VacnacyCardProps } from "@/components/VacancyCard/types";

export interface VacancyProps extends Omit<VacnacyCardProps, "isLiked"> {
	companyFounded: string;
	location: string;
}
