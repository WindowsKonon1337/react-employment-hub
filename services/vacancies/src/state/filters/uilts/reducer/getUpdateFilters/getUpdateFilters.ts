import { FiltersData } from "@/components";

export const getFiltersUpdate = ({
	currentFilters,
	newFilters,
}: {
	currentFilters: FiltersData[];
	newFilters: FiltersData;
}): FiltersData[] => {
	const filtersExistIndex = currentFilters.findIndex((filter) => filter.title === newFilters.title);
	if (filtersExistIndex != -1 && newFilters.filters.length) {
		currentFilters[filtersExistIndex] = newFilters;
		return currentFilters;
	} else if (filtersExistIndex != -1 && newFilters.filters.length === 0) {
		const updatedFilters = currentFilters;
		updatedFilters.splice(filtersExistIndex, 1);
		return updatedFilters;
	}
	return currentFilters.concat(newFilters);
};
