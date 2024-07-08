import { SalaryData } from "@/components/VacancyCard/types";

export interface VacancyQueryCardData {
	title: string;
	description: string;
	id: string;
	tags: string[];
	salary?: SalaryData | null;
}
