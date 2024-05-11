import { FiltersState } from "../../types";
import { getParams } from "../getParams/getParams";

export const getFiltersInit = (url: string): FiltersState => {
	const currentParams = getParams(url);

	console.log(currentParams);

	return {
		filters: currentParams,
	};
};
