import { FC } from "react";
import { UplaodMoreBtn } from "@packages/shared/src/components";

import { VacancyCard } from "@/components";

import { VacancyContentProps } from "./types";
import { EmptySection } from "./components";

export const VacancyContent: FC<VacancyContentProps> = ({
	handleUpdateCurrentPage,
	vacancyItems,
	isEmptyData,
}) => {
	if (isEmptyData) {
		return <EmptySection />;
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
