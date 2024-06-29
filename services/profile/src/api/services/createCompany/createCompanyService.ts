import { instance } from "@/api/axiosConfig";

import { CreateCompanyFormData } from "./types";

export const CreateCompanyService = {
	createCompany: async (data: CreateCompanyFormData) => instance.post("/create/company", data),
};
