import { FC } from "react";
import { Loader, PlugSection, UplaodMoreBtn } from "@packages/shared/src/components";

import { TypeOfVirtualized, useGetScrollElement, VirtualizedComponent } from "@/components";

import { VacanciesContainer, VacancyCardItem } from "./styled";
import { VacanciesContentProps } from "./types";
import { useData } from "./utils";
import { VacanciesWrapper } from "./components";

export const VacanciesContents: FC<VacanciesContentProps> = ({ id }) => {
	const { data, handleUpdateCurrentPage, isPending, pageInfo } = useData();

	const heightContainer = (window.innerHeight * 85) / 100;

	const { scrollTop, setScrollTop, handleOnScroll } = useGetScrollElement<HTMLDivElement>();

	if (!data.length && !isPending) {
		return <PlugSection typePlug="emptyData" />;
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
							elementhsHeight: 200,
							scrollTop: scrollTop,
							setScrollTop: setScrollTop,
							customProps: (index: number) => ({
								$isCheck: data[index].id === id,
							}),
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
