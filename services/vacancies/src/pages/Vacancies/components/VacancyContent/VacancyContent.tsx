import { FC } from "react";
import { UplaodMoreBtn } from "@packages/shared/src/components";

import { TypeOfVirtualized, VacancyCard, VirtualizedComponent } from "@/components";

import { VacancyContentProps } from "./types";
import { EmptySection } from "./components";

export const VacancyContent: FC<VacancyContentProps> = ({
	handleUpdateCurrentPage,
	vacancyItems,
	isEmptyData,
}) => {
	if (isEmptyData || !vacancyItems?.length) {
		return <EmptySection />;
	}

	return (
		<>
			<VirtualizedComponent
				settings={{
					type: TypeOfVirtualized.window,
					data: {
						items: vacancyItems,
						elementhsHeight: 200,
						elemntsLenght: vacancyItems.length,
						ComponentForRender: VacancyCard,
					},
				}}
			/>
			<UplaodMoreBtn handleClick={handleUpdateCurrentPage} />
		</>
	);
};
