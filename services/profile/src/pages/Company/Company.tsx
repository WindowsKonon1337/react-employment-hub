import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button, Loader, Title } from "@packages/shared/src/components";

import { CompanyService } from "@/api/services";

import { UpdateCompanyForm, Vacancy } from "./components";
import { CompanyContainer, VacancyBlockInfo } from "./styled";

const Company = () => {
	const { pathname } = useLocation();

	const companyId = pathname.split("/")[2];

	const { data: companyData, isLoading } = useQuery({
		queryKey: ["getCompanyFormData"],
		queryFn: async () => CompanyService.getCompany(companyId),
	});

	return (
		<CompanyContainer>
			<Title>Your Company</Title>
			<div>
				{isLoading || !companyData ? (
					<Loader />
				) : (
					<UpdateCompanyForm data={companyData} id={companyId} />
				)}
			</div>
			<div>
				<VacancyBlockInfo>
					<Title size="m">Vacnacy for this company</Title>
					<Button>add new</Button>
				</VacancyBlockInfo>
				<Vacancy companyId={companyId} />
			</div>
		</CompanyContainer>
	);
};

export default Company;
