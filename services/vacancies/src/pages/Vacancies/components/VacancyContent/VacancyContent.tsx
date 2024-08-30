import { FC } from "react";
import {
	Loader,
	PlugSection,
	UplaodMoreBtn,
	VirtualizedComponent,
	TypeOfVirtualized,
} from "@packages/shared/src/components";

import { VacancyCard } from "@/components";

import { VacancyContentProps } from "./types";

export const VacancyContent: FC<VacancyContentProps> = ({
	handleUpdateCurrentPage,
	setIsOnlyPageUpdate,
	vacancyItems,
	isEmptyData,
	isUploadMoreData,
}) => {
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
						nameWrapperForData: "data",
					},
				}}
			/>
			{isUploadMoreData ? <Loader /> : <UplaodMoreBtn handleClick={handleUpdatePage} />}
		</>
	);
};
