import { Search } from "./components/Search";
import { HeaderTitle, HeaderWrapper } from "./styled";

export const Header = () => {
	return (
		<HeaderWrapper>
			<HeaderTitle>Find Your Dream Job Here</HeaderTitle>
			<Search />
		</HeaderWrapper>
	);
};
