import { useLocation } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Loader, Title } from "@packages/shared/src/components";

import ErrorImg from "public/img/error/error.png";
import { Tag } from "@/components";
import { VacancyService } from "@/api/services";
// import { useAppSelector } from "@/hooks/redux";
import { TagsWrapper } from "@/components/VacancyCard/styled";

import {
	ComponentInfoBlock,
	CompanyInfoText,
	CompanyInfoTitle,
	InfoCompanyBlock,
	LeftContentBlock,
	RightContentBlock,
	TitleBlock,
	VacanciesContainer,
	VacancyCardItem,
	VacancyContainer,
	VacancyDescription,
	VacancyInfoConainer,
	InfoTitle,
	SalaryBlock,
	ApplyBtnBlock,
	ApplyBtn,
	EmptyBlock,
} from "./styled";
import { useEffect } from "react";

const Vacancy = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	// const { filters } = useAppSelector((state) => state.filters);

	const { data, isLoading } = useQuery({
		queryKey: ["getSimilarVacancy"],
		queryFn: () => VacancyService.getVacancies([]),
	});

	const {
		data: vacancyData,
		isPending,
		mutate,
	} = useMutation({
		mutationFn: (id: string) => VacancyService.getVacancy(id),
	});

	useEffect(() => {
		if (id) {
			mutate(id);
		}
	}, [id]);

	return (
		<VacancyContainer>
			<VacanciesContainer>
				{data?.map((item, idx) => (
					<VacancyCardItem $isCheck={item.id == id} {...item} key={`VacanciesItem_${idx}`} />
				))}
			</VacanciesContainer>
			{isPending ? (
				<Loader />
			) : vacancyData ? (
				<VacancyInfoConainer>
					<LeftContentBlock>
						<TitleBlock>
							<Title size="l">{vacancyData?.vacancyTitle}</Title>
							<TagsWrapper>
								{vacancyData?.tags.map((tag, idx) => <Tag {...tag} key={`Tag_${idx}`} />)}
							</TagsWrapper>
						</TitleBlock>
						<VacancyDescription>{vacancyData?.description}</VacancyDescription>
					</LeftContentBlock>
					<RightContentBlock>
						<div>
							<InfoCompanyBlock>
								<InfoTitle>{vacancyData?.companyTitle}</InfoTitle>
								<ComponentInfoBlock>
									<CompanyInfoTitle>Founded</CompanyInfoTitle>
									<CompanyInfoText>{vacancyData?.companyFounded}</CompanyInfoText>
								</ComponentInfoBlock>
								<ComponentInfoBlock>
									<CompanyInfoTitle>Location</CompanyInfoTitle>
									<CompanyInfoText>{vacancyData?.location}</CompanyInfoText>
								</ComponentInfoBlock>
							</InfoCompanyBlock>
							<SalaryBlock>
								<ComponentInfoBlock>
									<InfoTitle>Other information</InfoTitle>
									<CompanyInfoTitle>Salary</CompanyInfoTitle>
									<CompanyInfoText>
										{vacancyData?.salary.amount}
										{vacancyData?.salary.currency === "rubles"
											? "₽"
											: vacancyData?.salary.currency === "dollars"
												? "$"
												: "€"}
										/{vacancyData?.salary.inTime}
									</CompanyInfoText>
								</ComponentInfoBlock>
							</SalaryBlock>
						</div>
						<ApplyBtnBlock>
							<ApplyBtn onClick={() => console.log("apply")}>Apply</ApplyBtn>
						</ApplyBtnBlock>
					</RightContentBlock>
				</VacancyInfoConainer>
			) : (
				<EmptyBlock>
					<img src={ErrorImg} alt="errorImage" width="350px" />
					<InfoTitle>Something went wrong when uploading the data</InfoTitle>
				</EmptyBlock>
			)}
		</VacancyContainer>
	);
};

export default Vacancy;
