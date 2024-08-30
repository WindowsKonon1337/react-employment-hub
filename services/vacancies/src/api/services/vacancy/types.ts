import { FiltersData, VacancyCardData } from "@/components";

export interface VacancyProps extends Omit<VacancyCardData, "isLiked"> {
	companyFounded: string;
	location: string;
}

export interface VacancyResponseData {
	filters: FiltersData[] | [];
	params?: string;
}
