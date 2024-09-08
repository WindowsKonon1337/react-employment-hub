import { FC, useEffect } from "react";
import {
	Loader,
	PlugSection,
	TypeOfVirtualized,
	UplaodMoreBtn,
	useGetItemsInRow,
	VirtualizedComponent,
} from "@packages/shared/src/components";
import { Toaster } from "react-hot-toast";

import { VacancyCard } from "@/components";

import { VacancyProps } from "./types";
import { useData } from "./utils";

export const Vacancy: FC<VacancyProps> = ({ companyId }) => {
	const {
		currentData,
		handleDeleteItem,
		handleGetData,
		handleUpdateData,
		handleUploadMore,
		isChangePageLoadingData,
		isFullLoadingPage,
	} = useData({ companyId });

	useEffect(() => {
		handleGetData(0);
	}, []);

	const { containerRef, currentColumnWidth, currentItemInRow } = useGetItemsInRow({
		gapNumber: 20,
		columnWidth: 450,
		itemWidth: 450,
	});

	if (!currentData.length && !isFullLoadingPage) {
		return <PlugSection typePlug="emptyData" />;
	}

	if (isFullLoadingPage) {
		return <Loader />;
	}

	return (
		<div ref={containerRef}>
			<VirtualizedComponent
				settings={{
					type: TypeOfVirtualized.gridWindow,
					data: {
						columnCount: currentItemInRow,
						columnWidth: currentColumnWidth,
						ComponentForRender: VacancyCard,
						items: currentData,
						rowCount: Math.ceil(currentData.length / currentItemInRow),
						rowHeight: 160,
						stylesContentContainer: { margin: "0 auto" },
						nameWrapperForData: "data",
						customProps: () => ({ handleUpdate: handleUpdateData, handleDelete: handleDeleteItem }),
					},
				}}
			/>
			<Toaster />
			{isChangePageLoadingData ? <Loader /> : <UplaodMoreBtn handleClick={handleUploadMore} />}
		</div>
	);
};
