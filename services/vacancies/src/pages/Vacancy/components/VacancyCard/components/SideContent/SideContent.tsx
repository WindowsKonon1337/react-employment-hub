import { Text } from "@packages/shared/src/components";

import {
	CompanyInfoTitle,
	ComponentInfoBlock,
	InfoCompanyBlock,
	InfoTitle,
	SalaryBlock,
	SideContentBlock,
} from "./styled";
import { getSalaryCurrency } from "./utils";
import { FC } from "react";
import { SideContentsProps } from "./types";

export const SideContent: FC<SideContentsProps> = ({
	companyFounded,
	companyTitle,
	location,
	salary,
}) => {
	return (
		<InfoCompanyBlock>
			<SideContentBlock>
				<InfoTitle>{companyTitle}</InfoTitle>
				<ComponentInfoBlock>
					<CompanyInfoTitle>Founded</CompanyInfoTitle>
					<Text>{companyFounded}</Text>
				</ComponentInfoBlock>
				<ComponentInfoBlock>
					<CompanyInfoTitle>Location</CompanyInfoTitle>
					<Text>{location}</Text>
				</ComponentInfoBlock>
			</SideContentBlock>
			<SalaryBlock>
				<ComponentInfoBlock>
					<InfoTitle>Other information</InfoTitle>
					<CompanyInfoTitle>Salary</CompanyInfoTitle>
					<Text>
						<span>{salary.amount}</span>
						{getSalaryCurrency(salary.currency)}/<span>{salary.inTime}</span>
					</Text>
				</ComponentInfoBlock>
			</SalaryBlock>
		</InfoCompanyBlock>
	);
};
