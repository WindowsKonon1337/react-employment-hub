import { useEffect } from "react";
import {
	Loader,
	Title,
	TypeOfVirtualized,
	UplaodMoreBtn,
	VirtualizedComponent,
} from "@packages/shared/src/components";

import { Container } from "@/components";

import { ContentContainer } from "./styled";
import { useData } from "./utils";
import { Response } from "./components";

const Responses = () => {
	const { handleGetData, isPending, responsesCard, handleUpalodeMoreData } = useData();

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
					{/* TODO: реализовать через GRID - > создать новый компонент для виртуализации */}
					<VirtualizedComponent
						settings={{
							type: TypeOfVirtualized.window,
							data: {
								ComponentForRender: Response,
								elementhsHeight: 120,
								elemntsLenght: responsesCard.length,
								items: responsesCard,
							},
						}}
					/>
					<UplaodMoreBtn title="load more" handleClick={handleUpalodeMoreData} />
				</ContentContainer>
			)}
		</Container>
	);
};

export default Responses;
