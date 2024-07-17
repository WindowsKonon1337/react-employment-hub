export interface CompanyCardData {
	id: string;
	companyTitle: string;
	companyDescription: string;
	tags: { value: string }[];
	location: string;
	companyImg?: string;
}

export interface CompanyCardProps {
	data: CompanyCardData;
	handeleDeleteCard?: (id: string) => void;
	className?: string;
}
