import { useReducer } from "react";

import { filtersReducer } from "./uilts";
import { FiltersActionType } from "./uilts/types";
import { FiltersData } from "@/components/Filters/types";
import { useLocation } from "react-router-dom";
import { getFiltersInit } from "./uilts/getInitFilters";

export const useFilters = () => {
	const { search } = useLocation();

	const [filters, dispatch] = useReducer(filtersReducer, search, getFiltersInit);

	const addFilters = (filters: FiltersData[]) =>
		dispatch({ type: FiltersActionType.ADD, payload: filters });
	const deleteFilter = (filterId: string) =>
		dispatch({ type: FiltersActionType.DELETE, payload: { filterId: filterId } });
	const updateCurrentFilter = (filter: FiltersData) =>
		dispatch({ type: FiltersActionType.UPDATE_CURRENT_FILTERS, payload: filter });
	const deleteAllFilters = () => dispatch({ type: FiltersActionType.DELETE_ALL, payload: null });

	return {
		filters,
		addFilters,
		deleteFilter,
		deleteAllFilters,
		updateCurrentFilter,
	};
};
