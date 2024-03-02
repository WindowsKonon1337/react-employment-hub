import Magnifier from "public/img/Search/search.svg";
import Map from "public/img/Search/map.svg";

import { Input, InputWrapper, SearchBtn, SearchWrapper } from "./styled";

export const Search = () => {
	return (
		<SearchWrapper>
			<InputWrapper>
				<Magnifier />
				<Input placeholder="Job title or keyword" />
			</InputWrapper>
			<InputWrapper>
				<Map />
				<Input placeholder="Add Country or City" />
			</InputWrapper>
			<SearchBtn>Search</SearchBtn>
		</SearchWrapper>
	);
};
