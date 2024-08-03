import Magnifier from "public/img/Search/search.svg";

import { Input, InputWrapper, SearchBtn, SearchWrapper } from "./styled";
import { InputWithDropDown } from "./components";
import { useFilterData } from "./utils";

export const Search = () => {
	const { locationValue, serachValue, setLocationValue, setSearchValue } = useFilterData();

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
