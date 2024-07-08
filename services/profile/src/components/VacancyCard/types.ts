export interface SalaryData {
	currency: "rubles" | "dollars" | "euros";
	amount: string;
	inTime: "hour" | "year";
}

export interface VacancyCardData {
	title: string;
	description: string;
	id: string;
	tags: { label: string; value: string }[];
	salary?: SalaryData;
}

export interface VacnacyCardFormValues {
	title: string;
	description: string;
	id: string;
	tags: { label: string; value: string }[];
	salary?: {
		currency: { label: string; value: string }[];
		amount: string;
		inTime: { label: string; value: string }[];
	};
}

export interface VacancyCardProps {
	data: VacancyCardData;
	className?: string;
}
