import { FiltersProps } from "@/components/Filters/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FiltersState {
	filters: FiltersProps[] | [];
}

const initialState: FiltersState = {
	filters: [],
};

export const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		addFilters: (state, action: PayloadAction<FiltersProps[]>) => {
			state.filters = action.payload;
		},
		addFilter: (state, action: PayloadAction<FiltersProps>) => {
			const currentFilters = [...state.filters];
			const filterIdx = currentFilters.findIndex((item) => item.title === action.payload.title);
			if (filterIdx > -1) {
				currentFilters[filterIdx].filters = action.payload.filters;
			} else {
				currentFilters.push(action.payload);
			}
			state.filters = currentFilters;
		},
		clearAllFilters: (state) => {
			state.filters = [];
		},
	},
});

export const { addFilters, addFilter, clearAllFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
