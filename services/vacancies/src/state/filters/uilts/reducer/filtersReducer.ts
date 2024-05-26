import { FiltersState } from "../../types";
import { FiltersAction, FiltersActionType } from "../types";
import { getFiltersUpdate } from "./getUpdateFilters";

export const filtersReducer = (state: FiltersState, action: FiltersAction): FiltersState => {
	switch (action.type) {
		case FiltersActionType.ADD: {
			const { payload } = action;
			const updatedFilters = payload;

			return {
				filters: updatedFilters,
			};
		}
		case FiltersActionType.UPDATE_CURRENT_FILTERS: {
			const { payload } = action;
			const updatedFilters = getFiltersUpdate({ currentFilters: state.filters, newFilters: payload });
			return {
				filters: updatedFilters,
			};
		}

		case FiltersActionType.DELETE: {
			const { payload } = action;
			const updatedFilters = state.filters.filter((filter) => filter.title !== payload.title);
			return {
				filters: updatedFilters,
			};
		}

		case FiltersActionType.DELETE_ALL: {
			return {
				filters: [],
			};
		}
	}
};
