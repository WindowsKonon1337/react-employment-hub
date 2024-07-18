export interface CreateCompanyQueryData {
	companyTitle: string;
	companyDescription: string;
	tags: { value: string; label: string }[];
	location: string;
	companyImg?: File | null;
}
