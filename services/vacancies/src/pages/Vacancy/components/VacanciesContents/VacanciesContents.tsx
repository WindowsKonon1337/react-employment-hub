import { FC, useRef } from "react";
import { useVirtualizedScroll } from "@packages/shared/src/hooks";
import { Loader, UplaodMoreBtn } from "@packages/shared/src/components";

import { EmptySection } from "@/pages/Vacancies/components/VacancyContent/components";

import { VacanciesContainer, VacancyCardItem } from "./styled";
import { VacanciesContentProps } from "./types";
import { useData } from "./utils";

export const VacanciesContents: FC<VacanciesContentProps> = ({ id }) => {
	const vacanciesContainer = useRef<HTMLDivElement>(null);

	const { data, handleUpdateCurrentPage, isPending, pageInfo } = useData();

	const { visibleItems } = useVirtualizedScroll({
		items: data ? data : [],
		itemHeight: 146,
		container: vacanciesContainer,
	});

	if (!data.length && !isPending) {
		return <EmptySection />;
	}

	return (
		<VacanciesContainer ref={vacanciesContainer}>
			{visibleItems?.map((item, idx) => (
				<VacancyCardItem $isCheck={item.id == id} {...item} key={`VacanciesItem_${idx}`} />
			))}
			{isPending ? (
				<Loader />
			) : (
				<UplaodMoreBtn
					handleClick={() => handleUpdateCurrentPage(pageInfo.page + 1)}
					title="upload more"
				/>
			)}
		</VacanciesContainer>
	);
};
