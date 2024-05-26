import { useEffect, useState } from "react";
import { DropDownList, Loader, Title, UplaodMoreBtn } from "@packages/shared/src/components";
import { useMutation } from "@tanstack/react-query";

import { FiltersResponseData } from "@/api/services/filters/types";
import { useVirtualizedScroll } from "@/hooks";
import { VacancyService } from "@/api/services";
import { useFiltersContext } from "@/state";
import { SortsType, usePageInfo } from "@/reducer";
import { Filters, VacancyCard } from "@/components";

import { ContentBlock, ContentWrapper, HeaderBlock, TopBlock, VacanciesBlock } from "./styled";
import { useFiltersQuery } from "./utils";
import { SortsData } from "./data";

const Vacnacies = () => {
	const { filters } = useFiltersContext();
	const { pageInfo, handleUpdateCurrentPage, handleChangeCurrentSorts } = usePageInfo();
	const [currentSort, setCurrentSort] = useState<SortsType>("ASC");

	const { data, isLoading } = useFiltersQuery();

	const {
		mutate,
		isPending,
		data: vacancies,
	} = useMutation({
		mutationFn: (filtersData: FiltersResponseData) => VacancyService.getVacancies(filtersData),
	});

	const { visibleItems } = useVirtualizedScroll({ items: vacancies ? vacancies : [] });

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
		console.log(filters);
		console.log(pageInfo);
		mutate({ filters: filters.filters, pageInfo: pageInfo.pageInfo });
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
						<div>
							{data &&
								data.filters.length &&
								data?.filters.map((item, idx) => (
									<Filters
										title={item.title}
										filters={item.filters}
										key={`Filters_${idx}`}
										onClick={() => console.log("click")}
									/>
								))}
						</div>
						<VacanciesBlock>
							{isPending ? (
								<Loader />
							) : (
								<>
									{visibleItems.map((item, idx) => (
										<VacancyCard {...item} key={`VacnyCard_${idx}`} />
									))}
									<UplaodMoreBtn handleClick={() => handleUpdateCurrentPage(pageInfo.pageInfo.page + 1)} />
								</>
							)}
						</VacanciesBlock>
					</ContentWrapper>
				</ContentBlock>
			)}
		</>
	);
};

export default Vacnacies;
