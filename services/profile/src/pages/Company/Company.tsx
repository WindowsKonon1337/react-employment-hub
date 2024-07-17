import { useLocation } from "react-router-dom";

import { UpdateCompanyForm, Vacancy } from "./components";
import { CompanyContainer, VacancyBlockInfo } from "./styled";
import { Button, Title } from "@packages/shared/src/components";

const Company = () => {
	const { pathname } = useLocation();

	const companyId = pathname.split("/")[2];

	return (
		<CompanyContainer>
			<div>
				<UpdateCompanyForm
					data={{
						companyTitle: "test",
						companyDescription: "test",
						location: "Russioa/Mscow",
						tags: [
							{ label: "test", value: "test" },
							{ label: "test", value: "test" },
						],
						companyImg:
							"https://images.unsplash.com/photo-1718103377026-df9e40c78141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					}}
				/>
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
