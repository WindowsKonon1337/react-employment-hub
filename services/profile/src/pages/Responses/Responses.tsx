import { useEffect } from "react";
import { Loader, Title, UplaodMoreBtn } from "@packages/shared/src/components";
import { useVirtualizedScroll } from "@packages/shared/src/hooks";

import { Container } from "@/components";

import { ContentContainer } from "./styled";
import { useData } from "./utils";
import { Response } from "./components";

const Responses = () => {
	const { handleGetData, isPending, responsesCard, handleUpalodeMoreData } = useData();

	const { visibleItems } = useVirtualizedScroll({ items: responsesCard ?? [], itemHeight: 113 });

	useEffect(() => {
		handleGetData();
	}, []);

	return (
		<Container>
			<Title>Your feedback</Title>
			{isPending ? (
				<Loader />
			) : (
				<ContentContainer>
					{visibleItems?.map((responseCard, idx) => (
						<Response data={responseCard.data} status={responseCard.status} key={idx} />
					))}
					<UplaodMoreBtn title="load more" handleClick={handleUpalodeMoreData} />
				</ContentContainer>
			)}
		</Container>
	);
};

export default Responses;
