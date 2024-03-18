import { useEffect } from "react";
import { Title } from "@packages/shared/src/components";
import { useQuery } from "@tanstack/react-query";

import { addFilter, addFilters } from "@/store";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { filtersService } from "@/api/services";
import { Filters, VacancyCard } from "@/components";

import { ContentBlock, ContentWrapper, HeaderBlock, VacanciesBlock } from "./styled";

const Vacnacies = () => {
	const { filters } = useAppSelector((item) => item.filters);
	const dispatch = useAppDispatch();

	const { data, isSuccess } = useQuery({
		queryKey: ["getFilters"],
		queryFn: () => filtersService.getFilters(),
	});

	useEffect(() => {
		if (data) {
			dispatch(addFilters(data));
		}
	}, [isSuccess]);

	const filtersGroupChoise = (content: { title: string; filters: any }) => {
		dispatch(addFilter(content));
	};

	console.log(data, filters);

	return (
		<>
			<HeaderBlock />
			<ContentBlock>
				<Title>Recommended jobs</Title>
				<ContentWrapper>
					<div>
						{isSuccess &&
							data.length &&
							data?.map((item, idx) => (
								<Filters
									title={item.title}
									filters={item.filters}
									key={`Filters_${idx}`}
									onClick={filtersGroupChoise}
								/>
							))}
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
