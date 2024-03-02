import { TagProps } from "../UI";

interface SalaryProps {
	currency: "rubles" | "dollars" | "euros";
	amount: string;
	inTime: "hour" | "year";
}

export interface VacnacyCardProps {
	vacancyTitle: string;
	companyTitle: string;
	countCandidates: number;
	isLiked: boolean;
	salary: SalaryProps;
	description: string;
	postedTime: string;
	id: string;
	tags: TagProps[];
}
