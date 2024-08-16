import { useEffect, useState } from "react";
import { DropDownList, Loader, Title } from "@packages/shared/src/components";
import { useVirtualizedScroll } from "@packages/shared/src/hooks";

import { useFiltersContext } from "@/state";
import { SortsType, usePageInfo } from "@/reducer";
import { Filters, VacnacyCardProps } from "@/components";

import { ContentBlock, ContentWrapper, HeaderBlock, TopBlock, VacanciesBlock } from "./styled";
import { SortsData } from "./data";
import { useData, useFiltersQuery } from "./utils";
import { VacancyContent } from "./components";

const Vacnacies = () => {
	const { filters } = useFiltersContext();
	const { pageInfo, handleUpdateCurrentPage, handleChangeCurrentSorts } = usePageInfo();
	const [currentSort, setCurrentSort] = useState<SortsType>("ASC");

	const { data, isLoading } = useFiltersQuery();

	const { handleGetVacancies, isPending, vacancies } = useData();

	const { visibleItems } = useVirtualizedScroll<VacnacyCardProps>({
		items: vacancies ? vacancies : [],
	});

	const handleSetSorts = (value: SortsType) => {
		setCurrentSort(value);
		handleChangeCurrentSorts([
			{
				code: "title",
				direction: currentSort,
			},
		]);
	};

	useEffect(() => {
		handleGetVacancies({ filters: filters.filters, pageInfo: pageInfo.pageInfo });
	}, [filters, pageInfo]);

	return (
		<>
			<HeaderBlock />
			{isLoading ? (
				<Loader />
			) : (
				<ContentBlock>
					<TopBlock>
						<Title>Recommended jobs</Title>
						<DropDownList listValues={SortsData} title="Choise sorts" handleChange={handleSetSorts} />
					</TopBlock>
					<ContentWrapper>
						<div>{data && data.filters.length && <Filters data={data.filters} />}</div>
						<VacanciesBlock>
							{isPending ? (
								<Loader />
							) : (
								<VacancyContent
									vacancyItems={visibleItems}
									isEmptyData={!visibleItems.length}
									handleUpdateCurrentPage={() => handleUpdateCurrentPage(pageInfo.pageInfo.page + 1)}
								/>
							)}
						</VacanciesBlock>
					</ContentWrapper>
				</ContentBlock>
			)}
		</>
	);
};

export default Vacnacies;
