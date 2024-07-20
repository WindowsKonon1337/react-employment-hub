import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button, Loader, Title } from "@packages/shared/src/components";

import { CompanyService } from "@/api/services";

import { CreateVacancyFormModal, UpdateCompanyForm, Vacancy } from "./components";
import { CompanyContainer, ContentBlock, VacancyBlockInfo } from "./styled";

const Company = () => {
	const { pathname } = useLocation();
	const [isCreateVacancyModalOpen, setIsCreateVacancyModalOpen] = useState(false);

	const companyId = pathname.split("/")[2];

	const { data: companyData, isLoading } = useQuery({
		queryKey: ["getCompanyFormData"],
		queryFn: async () => CompanyService.getCompany(companyId),
	});

	return (
		<CompanyContainer>
			<Title>Your Company</Title>
			<ContentBlock>
				{isLoading || !companyData ? (
					<Loader />
				) : (
					<UpdateCompanyForm data={companyData} id={companyId} />
				)}
			</ContentBlock>
			<ContentBlock>
				<VacancyBlockInfo>
					<Title size="m">Vacancy for this company</Title>
					<Button clickFuntcion={() => setIsCreateVacancyModalOpen(true)}>add new</Button>
				</VacancyBlockInfo>
			</ContentBlock>
			<Vacancy companyId={companyId} />
			{isCreateVacancyModalOpen && (
				<CreateVacancyFormModal setCloseModal={setIsCreateVacancyModalOpen} />
			)}
		</CompanyContainer>
	);
};

export default Company;
