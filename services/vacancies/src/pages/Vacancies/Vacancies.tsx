import { useEffect } from "react";
import { Loader, Title } from "@packages/shared/src/components";
import { useMutation } from "@tanstack/react-query";

import { useFiltersContext } from "@/state";
import { VacancyService } from "@/api/services";
import { Filters, VacancyCard } from "@/components";
import { FiltersProps } from "@/components/Filters";

import { ContentBlock, ContentWrapper, HeaderBlock, VacanciesBlock } from "./styled";
import { useFiltersQuery } from "./utils";

const Vacnacies = () => {
	const { filters } = useFiltersContext();

	const { data, isLoading } = useFiltersQuery();

	const { mutate, isPending } = useMutation({
		mutationFn: (filtersData: FiltersProps[] | []) => VacancyService.getVacancies(filtersData),
	});

	useEffect(() => {
		console.log(filters);
	}, [filters]);

	return (
		<>
			<HeaderBlock />
			{isLoading ? (
				<Loader />
			) : (
				<ContentBlock>
					<Title>Recommended jobs</Title>
					<ContentWrapper>
						<div>
							{data &&
								data.length &&
								data?.map((item, idx) => (
									<Filters
										title={item.title}
										filters={item.filters}
										key={`Filters_${idx}`}
										onClick={() => console.log("click")}
									/>
								))}
						</div>
						<VacanciesBlock>
							{isPending ? (
								<Loader />
							) : (
								<>
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
								</>
							)}
						</VacanciesBlock>
					</ContentWrapper>
				</ContentBlock>
			)}
		</>
	);
};

export default Vacnacies;
