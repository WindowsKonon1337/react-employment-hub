import { useEffect, useReducer } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import { FiltersData } from "@/components";

import {
	getFiltersInit,
	getConvertFiltersToString,
	filtersReducer,
	FiltersActionType,
} from "./uilts";

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
