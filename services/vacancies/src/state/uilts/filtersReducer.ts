import { FiltersState } from "../types";
import { getFiltersUpdate } from "./getUpdateFilters";
import { FiltersAction, FiltersActionType } from "./types";

export const filtersReducer = (state: FiltersState, action: FiltersAction): FiltersState => {
	switch (action.type) {
		case FiltersActionType.ADD: {
			const { payload } = action;
			const updatedFilters = payload;

			console.log("я упал сюда", payload);
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
			const updatedFilters = state.filters.filter((filter) => filter.filterId !== payload.filterId);
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
