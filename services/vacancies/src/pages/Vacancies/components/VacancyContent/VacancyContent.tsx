import { FC } from "react";
import { Loader, PlugSection, UplaodMoreBtn } from "@packages/shared/src/components";

import { TypeOfVirtualized, VacancyCard, VirtualizedComponent } from "@/components";

import { VacancyContentProps } from "./types";

export const VacancyContent: FC<VacancyContentProps> = ({
	handleUpdateCurrentPage,
	setIsOnlyPageUpdate,
	vacancyItems,
	isEmptyData,
	isUploadMoreData,
}) => {
	console.log(vacancyItems);

	if (isEmptyData || !vacancyItems?.length) {
		return <PlugSection typePlug="emptyData" plugText="Nothing was found for your query" />;
	}

	const handleUpdatePage = () => {
		handleUpdateCurrentPage();
		setIsOnlyPageUpdate(true);
	};

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
			{isUploadMoreData ? <Loader /> : <UplaodMoreBtn handleClick={handleUpdatePage} />}
		</>
	);
};
