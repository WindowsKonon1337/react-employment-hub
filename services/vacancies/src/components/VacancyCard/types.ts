import { TagData } from "../UI";

export type SalaryCurrency = "rubles" | "dollars" | "euros";

type SalaryInTime = "hour" | "year";

export interface SalaryData {
	currency: SalaryCurrency;
	amount: string;
	inTime: SalaryInTime;
}

export interface VacancyCardData {
	vacancyTitle: string;
	companyTitle: string;
	countCandidates: number;
	isLiked: boolean;
	salary: SalaryData;
	description: string;
	postedTime: string;
	id: string;
	tags: TagData[];
}

export interface VacancyCardProps {
	data: VacancyCardData;
	className?: string;
}
