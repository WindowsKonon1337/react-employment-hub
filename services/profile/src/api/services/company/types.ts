export interface CreateCompanyQueryData {
	companyTitle: string;
	companyDescription: string;
	tags: string[];
	location: string;
	companyImg?: File | null;
}
