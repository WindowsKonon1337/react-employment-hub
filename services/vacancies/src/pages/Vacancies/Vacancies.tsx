import { useState } from "react";
import { DropDownList, Loader, Title } from "@packages/shared/src/components";

import { useFiltersContext } from "@/state";
import { SortsType, usePageInfo } from "@/reducer";
import { Filters } from "@/components";

import {
	ContentBlock,
	ContentWrapper,
	EmptyDataSection,
	HeaderBlock,
	TopBlock,
	VacanciesBlock,
} from "./styled";
import { SortsData } from "./data";
import { useData, useFiltersQuery } from "./utils";
import { VacancyContent } from "./components";

const Vacnacies = () => {
	const { filters } = useFiltersContext();
	const { pageInfo, handleUpdateCurrentPage, handleChangeCurrentSorts } = usePageInfo();
	const [currentSort, setCurrentSort] = useState<SortsType>("ASC");

	const { data, isLoading } = useFiltersQuery();

	const { vacancies, isEmpty, isFullLoading, isUploadMoreData, setIsOnlyPageChange } = useData({
		filters,
		pageInfo,
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

	if (!data.filters.length && !isLoading) {
		return <EmptyDataSection typePlug="emptyData" />;
	}

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
						<Filters data={data.filters} />
						<VacanciesBlock>
							{isFullLoading ? (
								<Loader />
							) : (
								<VacancyContent
									vacancyItems={vacancies}
									isEmptyData={isEmpty}
									isUploadMoreData={isUploadMoreData}
									setIsOnlyPageUpdate={setIsOnlyPageChange}
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
