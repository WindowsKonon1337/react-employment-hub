import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { Error } from "global";
import { CompanyService, CreateCompanyQueryData } from "@/api/services";

import { UseDataParams } from "./types";

export const useData = ({ setIsChangeData, id, currentData }: UseDataParams) => {
	const [companyData, setCompanyData] = useState(currentData);

	const { mutate: handleUpdateData } = useMutation({
		mutationFn: async (data: CreateCompanyQueryData) => CompanyService.updateCompany(id, data),
		onSuccess: (newData) => {
			setIsChangeData(false);
			setCompanyData(newData);
			toast.success("Company info success updated");
		},
		onError: (error: Error) => {
			setIsChangeData(true);
			toast.error(`${error.response?.data.message ?? "Something went wrong"}`);
		},
	});

	return {
		companyData,
		handleUpdateData,
	};
};
