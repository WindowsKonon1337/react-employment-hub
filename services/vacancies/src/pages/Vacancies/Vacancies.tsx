import { useEffect } from "react";
import { Loader, Title, UplaodMoreBtn } from "@packages/shared/src/components";
import { useMutation } from "@tanstack/react-query";

import { useFiltersContext } from "@/state";
import { VacancyService } from "@/api/services";
import { Filters, VacancyCard } from "@/components";
import { FiltersProps } from "@/components/Filters";

import { ContentBlock, ContentWrapper, HeaderBlock, VacanciesBlock } from "./styled";
import { useFiltersQuery } from "./utils";
import { useVirtualizedScroll } from "@/hooks";

const Vacnacies = () => {
	const { filters } = useFiltersContext();

	const { data, isLoading } = useFiltersQuery();

	const {
		mutate,
		isPending,
		data: vacancies,
	} = useMutation({
		mutationFn: (filtersData: FiltersProps[] | []) => VacancyService.getVacancies(filtersData),
	});

	const { visibleItems } = useVirtualizedScroll({ items: vacancies ? vacancies : [] });

	useEffect(() => {
		console.log(filters);
		mutate(filters.filters);
	}, [filters]);

	return (
		<>
			<HeaderBlock />
			{isLoading ? (
				<Loader />
			) : (
				<ContentBlock>
					<Title>Recommended jobs</Title>
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
									<UplaodMoreBtn handleClick={() => console.log("upload more")} />
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
