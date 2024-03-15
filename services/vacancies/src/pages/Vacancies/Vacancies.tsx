import { Title } from "@packages/shared/src/components";

import { Filters, VacancyCard } from "@/components";

import { ContentBlock, ContentWrapper, HeaderBlock, VacanciesBlock } from "./styled";
import { FiltersType } from "@/components/Filters/types";

const Vacnacies = () => {
	return (
		<>
			<HeaderBlock />
			<ContentBlock>
				<Title>Recommended jobs</Title>
				<ContentWrapper>
					<div>
						<Filters
							title="Test"
							filters={[
								{ type: FiltersType.checkBox, data: { title: "test" } },
								{ type: FiltersType.checkBox, data: { title: "test1", isCheck: true } },
							]}
						/>
						<Filters
							title="Test 2"
							filters={[
								{ type: FiltersType.checkBox, data: { title: "test" } },
								{ type: FiltersType.range, data: "test" },
							]}
						/>
					</div>
					<VacanciesBlock>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
						<VacancyCard
							companyTitle="CompanyTitle"
							countCandidates={25}
							description="test etst etstet"
							isLiked={true}
							salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
							tags={[
								{ title: "test1", color: "blue" },
								{ title: "test2", color: "violet" },
								{ title: "test3", color: "green" },
							]}
							vacancyTitle="VacancyTitle"
							id="1"
							postedTime="25"
						/>
					</VacanciesBlock>
				</ContentWrapper>
			</ContentBlock>
		</>
	);
};

export default Vacnacies;
