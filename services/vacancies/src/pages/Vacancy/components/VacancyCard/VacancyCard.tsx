import { FC } from "react";

import { VacancyProps } from "@/api/services/vacancy/types";

import { VacancyContent, SideContent } from "./components";
import { ApplyBtn, ApplyBtnBlock, SideContentBlock, VacancyInfoConainer } from "./styled";

export const VacancyCard: FC<VacancyProps> = ({
	companyFounded,
	companyTitle,
	description,
	location,
	salary,
	tags,
	vacancyTitle,
}) => {
	return (
		<VacancyInfoConainer>
			<VacancyContent description={description} tags={tags} title={vacancyTitle} />
			<SideContentBlock>
				<SideContent
					companyFounded={companyFounded}
					companyTitle={companyTitle}
					location={location}
					salary={salary}
				/>
				<ApplyBtnBlock>
					<ApplyBtn onClick={() => console.log("apply")}>Apply</ApplyBtn>
				</ApplyBtnBlock>
			</SideContentBlock>
		</VacancyInfoConainer>
	);
};
