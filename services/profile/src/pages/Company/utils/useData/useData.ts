import { useQuery } from "@tanstack/react-query";

import { CompanyService } from "@/api/services";

export const useData = (companyId: string) => {
	const { data: companyData, isLoading } = useQuery({
		queryKey: ["getCompanyFormData"],
		queryFn: async () => CompanyService.getCompany(companyId),
	});

	return {
		companyData,
		isLoading,
	};
};
