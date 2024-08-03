import { useEffect, useState } from "react";

import { FiltersType, useFiltersContext } from "@/state";

export const useFilterData = () => {
	const { updateCurrentFilter, deleteFilter, filters } = useFiltersContext();

	const [serachValue, setSearchValue] = useState("");
	const [locationValue, setLocationValue] = useState("");

	useEffect(() => {
		const searchFilterIdx = filters.filters.findIndex((filter) => filter.title === "Search");
		const locationFilterIdx = filters.filters.findIndex((filter) => filter.title === "Location");
		if (searchFilterIdx > -1) {
			if (filters.filters[searchFilterIdx].filters[0].type === FiltersType.search) {
				setSearchValue(filters.filters[searchFilterIdx].filters[0].data as string);
			}
		}
		if (locationFilterIdx > -1) {
			if (filters.filters[locationFilterIdx].filters[0].type === FiltersType.location) {
				setLocationValue(filters.filters[locationFilterIdx].filters[0].data as string);
			}
		}
	}, []);

	useEffect(() => {
		if (updateCurrentFilter && deleteFilter) {
			if (serachValue) {
				updateCurrentFilter({
					title: "Search",
					filters: [
						{
							type: FiltersType.search,
							data: serachValue,
						},
					],
				});
			} else {
				deleteFilter("Search");
			}
			if (locationValue) {
				updateCurrentFilter({
					title: "Location",
					filters: [
						{
							type: FiltersType.location,
							data: locationValue,
						},
					],
				});
			} else {
				deleteFilter("Location");
			}
		}
	}, [serachValue, locationValue]);

	return { serachValue, locationValue, setSearchValue, setLocationValue };
};
