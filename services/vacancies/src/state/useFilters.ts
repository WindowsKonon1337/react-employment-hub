import { useEffect, useReducer } from "react";

import { filtersReducer } from "./uilts";
import { FiltersActionType } from "./uilts/types";
import { FiltersData } from "@/components/Filters/types";
import { useLocation, useSearchParams } from "react-router-dom";
import { getFiltersInit } from "./uilts/getInitFilters";
import { getConvertFiltersToString } from "./uilts/getConvertFiltersToString/getCOnvertFiltersToString";

export const useFilters = () => {
	const { search } = useLocation();
	const [, setSearchParams] = useSearchParams();

	const [filters, dispatch] = useReducer(filtersReducer, search, getFiltersInit);

	const addFilters = (filters: FiltersData[]) =>
		dispatch({ type: FiltersActionType.ADD, payload: filters });
	const deleteFilter = (title: string) =>
		dispatch({ type: FiltersActionType.DELETE, payload: { title: title } });
	const updateCurrentFilter = (filter: FiltersData) =>
		dispatch({ type: FiltersActionType.UPDATE_CURRENT_FILTERS, payload: filter });
	const deleteAllFilters = () => dispatch({ type: FiltersActionType.DELETE_ALL, payload: null });

	useEffect(() => {
		const newParams = getConvertFiltersToString({ filters: filters.filters });
		console.log(newParams);
		setSearchParams(newParams);
	}, [filters]);

	return {
		filters,
		addFilters,
		deleteFilter,
		deleteAllFilters,
		updateCurrentFilter,
	};
};
