import { FC } from "react";
import {
	Loader,
	PlugSection,
	UplaodMoreBtn,
	VirtualizedComponent,
	TypeOfVirtualized,
	useGetScrollElement,
} from "@packages/shared/src/components";

import { VacanciesContainer, VacancyCardItem } from "./styled";
import { VacanciesContentProps } from "./types";
import { useData } from "./utils";
import { VacanciesWrapper } from "./components";

export const VacanciesContents: FC<VacanciesContentProps> = ({ id }) => {
	const { data, handleUpdateCurrentPage, isPending, pageInfo } = useData();

	const heightContainer = (window.innerHeight * 85) / 100;

	const { scrollTop, setScrollTop, handleOnScroll } = useGetScrollElement<HTMLDivElement>();

	if (!data.length && !isPending) {
		return (
			<VacanciesWrapper>
				<PlugSection typePlug="emptyData" />
			</VacanciesWrapper>
		);
	}

	return (
		<VacanciesWrapper>
			<VacanciesContainer onScroll={handleOnScroll}>
				<VirtualizedComponent
					settings={{
						type: TypeOfVirtualized.customContainer,
						data: {
							containerHeight: heightContainer,
							ComponentForRender: VacancyCardItem,
							items: data,
							elemntsLenght: data.length,
							elementhsHeight: 250,
							scrollTop: scrollTop,
							setScrollTop: setScrollTop,
							customProps: (index: number) => ({
								$isCheck: data[index].id === id,
							}),
							nameWrapperForData: "data",
						},
					}}
				/>
				{isPending ? (
					<Loader />
				) : (
					<UplaodMoreBtn
						handleClick={() => handleUpdateCurrentPage(pageInfo.page + 1)}
						title="upload more"
					/>
				)}
			</VacanciesContainer>
		</VacanciesWrapper>
	);
};
