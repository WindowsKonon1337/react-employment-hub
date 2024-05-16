import { useEffect, useState } from "react";

import Magnifier from "public/img/Search/search.svg";
import Map from "public/img/Search/map.svg";

import { Input, InputWrapper, SearchBtn, SearchWrapper } from "./styled";
import { FiltersType, useFiltersContext } from "@/state";

export const Search = () => {
	const { updateCurrentFilter, deleteFilter, filters } = useFiltersContext();
	const [serachValue, setSearchValue] = useState("");

	useEffect(() => {
		const searchFilter = filters.filters.find((filter) => filter.title === "Search");

		if (searchFilter?.filters[0].type === FiltersType.search) {
			setSearchValue(searchFilter.filters[0].data);
		}
	}, []);

	useEffect(() => {
		if (updateCurrentFilter) {
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
				if (deleteFilter) {
					deleteFilter("Search");
				}
			}
		}
	}, [serachValue]);

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
				<Map />
				<Input placeholder="Add Country or City" />
			</InputWrapper>
			<SearchBtn>Search</SearchBtn>
		</SearchWrapper>
	);
};
