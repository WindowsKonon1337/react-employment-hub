export interface CreateCompanyFormData {
	companyTitle: string;
	companyDescription: string;
	tags: string[];
	location: string;
	companyImg?: File | null;
}
