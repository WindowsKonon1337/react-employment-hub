export type CreateCompanyFormValues = {
	companyTitle: string;
	companyDescription: string;
	tags: { value: string; label: string }[];
	location: string;
};
