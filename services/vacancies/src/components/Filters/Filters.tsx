import { FC, useEffect, useState } from "react";

import { FiltersTypeData } from "@/state";

import { FiltersComponents, FiltersTitle, FiltersWrapper } from "./styled";
import { FiltersProps } from "./types";
import { FiltersItem } from "./FIltersItem";
import { getInitFilters, useHandleUpdatedFiletrs } from "./utils";

export const Filters: FC<FiltersProps> = ({ filters, title }) => {
	const [currentFilters, setCurrentfitlers] = useState<FiltersTypeData[] | []>([]);
	const { handleUpdateFilters } = useHandleUpdatedFiletrs({
		currentFilters,
		setCurrentfitlers,
		titleFilter: title,
	});

	useEffect(() => {
		getInitFilters(filters, setCurrentfitlers);
	}, []);

	const handleFiltersUpdate = (updatedFilters: FiltersTypeData) => {
		handleUpdateFilters({ updatedFilters });
	};

	return (
		<FiltersWrapper>
			<FiltersTitle>{title}</FiltersTitle>
			<FiltersComponents>
				{filters.length &&
					filters.map((filter, idx) => (
						<FiltersItem data={filter} key={`FiltersItem_${idx}`} handleCheck={handleFiltersUpdate} />
					))}
			</FiltersComponents>
		</FiltersWrapper>
	);
};
