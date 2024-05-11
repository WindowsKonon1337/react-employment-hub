import { Dispatch, SetStateAction } from "react";

import { FiltersTypeData } from "../../types";

export interface UseHandleUpdatedFiltersProps {
	setCurrentfitlers: Dispatch<SetStateAction<FiltersTypeData[]>>;
	titleFilter: string;
	currentFilters: FiltersTypeData[];
}

export interface HandleUpdatedFiltersProps {
	updatedFilters: FiltersTypeData;
}
