import { CreateCompanyQueryData } from "@/api/services";

export interface UpdateCompanyFormData extends Omit<CreateCompanyQueryData, "companyImg" | "tags"> {
	companyImg?: string | null;
	tags: { value: string; label: string }[] | [];
}

export interface UpdateCompanyFormProps {
	data: UpdateCompanyFormData;
	id: string;
}
