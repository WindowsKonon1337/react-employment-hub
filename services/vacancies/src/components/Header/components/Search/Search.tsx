import { useEffect, useState } from "react";

import Magnifier from "public/img/Search/search.svg";

import { Input, InputWrapper, SearchBtn, SearchWrapper } from "./styled";
import { FiltersType, useFiltersContext } from "@/state";
import { InputWithDropDown } from "./components";

export const Search = () => {
	const { updateCurrentFilter, deleteFilter, filters } = useFiltersContext();
	const [serachValue, setSearchValue] = useState("");
	const [locationValue, setLocationValue] = useState("");

	useEffect(() => {
		const searchFilterIdx = filters.filters.findIndex((filter) => filter.title === "Search");
		const locationFilterIdx = filters.filters.findIndex((filter) => filter.title === "Location");
		if (searchFilterIdx > -1) {
			if (filters.filters[searchFilterIdx].filters[0].type === FiltersType.search) {
				// @ts-ignore
				setSearchValue(filters.filters[searchFilterIdx].filters[0].data);
			}
		}
		if (locationFilterIdx > -1) {
			if (filters.filters[locationFilterIdx].filters[0].type === FiltersType.location) {
				// @ts-ignore
				setLocationValue(filters.filters[locationFilterIdx].filters[0].data);
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

	return (
		<SearchWrapper>
			<InputWrapper>
				<Magnifier />
				<Input
					placeholder="Job title or keyword"
					value={serachValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
			</InputWrapper>
			<InputWrapper>
				<InputWithDropDown currentValue={locationValue} handleChangeCurrentValue={setLocationValue} />
			</InputWrapper>
			<SearchBtn>Search</SearchBtn>
		</SearchWrapper>
	);
};
