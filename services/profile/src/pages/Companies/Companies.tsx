import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import {
	Loader,
	PlugSection,
	TypeOfVirtualized,
	UplaodMoreBtn,
	useGetItemsInRow,
	VirtualizedComponent,
} from "@packages/shared/src/components";

import { CompanyCard, Container } from "@/components";

import { CompaniesContainer } from "./styled";
import { useData } from "./utils";

const Companies = () => {
	const {
		handleGetCompany,
		handleGetLocalCompanies,
		isChangePageDataPending,
		isFullPagePending,
		comapniesCards,
	} = useData();

	const { containerRef, currentColumnWidth, currentItemInRow } = useGetItemsInRow<HTMLDivElement>({
		columnWidth: 580,
		gapNumber: 25,
		itemWidth: 580,
	});

	useEffect(() => {
		handleGetLocalCompanies(0);
	}, []);

	if (isFullPagePending) {
		return <Loader />;
	}

	if (!comapniesCards.length && !isFullPagePending) {
		return <PlugSection typePlug="emptyData" />;
	}

	return (
		<Container>
			<CompaniesContainer ref={containerRef}>
				<VirtualizedComponent
					settings={{
						type: TypeOfVirtualized.gridWindow,
						data: {
							stylesContentContainer: { margin: "0 auto" },
							columnCount: currentItemInRow,
							columnWidth: currentColumnWidth,
							ComponentForRender: CompanyCard,
							items: comapniesCards || [],
							rowCount: Math.floor(comapniesCards.length / currentItemInRow),
							rowHeight: 220,
							nameWrapperForData: "data",
						},
					}}
				/>
				{isChangePageDataPending ? <Loader /> : <UplaodMoreBtn handleClick={handleGetCompany} />}
			</CompaniesContainer>
			<Toaster />
		</Container>
	);
};

export default Companies;
