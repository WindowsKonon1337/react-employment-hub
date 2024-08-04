import { FC } from "react";
import { UplaodMoreBtn } from "@packages/shared/src/components";

import EmptyDataIcon from "public/img/VacancyCard/emptyData.svg";
import { VacancyCard } from "@/components";

import { VacancyContentProps } from "./types";
import { EmptyDataPlug, PlugText } from "./styled";

export const VacancyContent: FC<VacancyContentProps> = ({
	handleUpdateCurrentPage,
	vacancyItems,
	isEmptyData,
}) => {
	if (isEmptyData) {
		return (
			<EmptyDataPlug>
				<EmptyDataIcon />
				<PlugText>Nothing was found for your query</PlugText>
			</EmptyDataPlug>
		);
	}

	return (
		<>
			{vacancyItems.map((item) => (
				<VacancyCard {...item} key={`VacnyCard_${item.id}`} />
			))}
			<UplaodMoreBtn handleClick={handleUpdateCurrentPage} />
		</>
	);
};
