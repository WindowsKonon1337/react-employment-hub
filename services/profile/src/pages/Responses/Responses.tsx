import { useEffect } from "react";
import {
	Loader,
	PlugSection,
	Title,
	TypeOfVirtualized,
	UplaodMoreBtn,
	VirtualizedComponent,
	useGetItemsInRow,
} from "@packages/shared/src/components";

import { Container } from "@/components";

import { ContentContainer } from "./styled";
import { useData } from "./utils";
import { Response } from "./components";

const Responses = () => {
	const {
		handleGetData,
		responsesCard,
		handleUploadMoreData,
		isFullPagePending,
		isOnlyPageDataPending,
	} = useData();

	useEffect(() => {
		handleGetData();
	}, []);

	const { containerRef, currentItemInRow, currentColumnWidth } = useGetItemsInRow({
		gapNumber: 20,
		itemWidth: 450,
		columnWidth: 450,
	});

	if (!responsesCard.length && !isFullPagePending) {
		return <PlugSection typePlug="emptyData" />;
	}

	return (
		<Container>
			<Title>Your feedback</Title>
			{isFullPagePending ? (
				<Loader />
			) : (
				<ContentContainer ref={containerRef}>
					<VirtualizedComponent
						settings={{
							type: TypeOfVirtualized.gridWindow,
							data: {
								ComponentForRender: Response,
								columnCount: currentItemInRow,
								columnWidth: currentColumnWidth,
								rowCount: Math.ceil(responsesCard.length / currentItemInRow),
								rowHeight: 120,
								items: responsesCard || [],
								stylesContentContainer: { margin: "0 auto" },
							},
						}}
					/>
					{isOnlyPageDataPending ? (
						<Loader />
					) : (
						<UplaodMoreBtn title="load more" handleClick={handleUploadMoreData} />
					)}
				</ContentContainer>
			)}
		</Container>
	);
};

export default Responses;
