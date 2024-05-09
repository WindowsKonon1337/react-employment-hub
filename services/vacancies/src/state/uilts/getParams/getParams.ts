import { FiltersData } from "@/components/Filters/types";
import { getFilterFromString } from "../getFilterFromString/getFilterFromString";

export const getParams = (urlWithParams: string): FiltersData[] => {
	if (urlWithParams) {
		const currentFiltersFromUrl = urlWithParams.split("?")[1];
		const currentParams = currentFiltersFromUrl.split("&");

		const currentFilters = currentParams.map((item) => getFilterFromString(item));

		console.log(currentFilters);
		return currentFilters as FiltersData[];
	}
	return [];
};
