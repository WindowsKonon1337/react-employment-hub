import { FC } from "react";
import { Loader, UplaodMoreBtn } from "@packages/shared/src/components";

import { TypeOfVirtualized, VacancyCard, VirtualizedComponent } from "@/components";

import { VacancyContentProps } from "./types";
import { EmptySection } from "./components";

export const VacancyContent: FC<VacancyContentProps> = ({
	handleUpdateCurrentPage,
	setIsOnlyPageUpdate,
	vacancyItems,
	isEmptyData,
	isUploadMoreData,
}) => {
	console.log(vacancyItems);

	if (isEmptyData || !vacancyItems?.length) {
		return <EmptySection />;
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
