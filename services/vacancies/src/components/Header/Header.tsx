import { FC } from "react";
import { Search } from "./components/Search";
import { HeaderTitle, HeaderWrapper } from "./styled";
import { HeaderProps } from "./types";

export const Header: FC<HeaderProps> = ({ className }) => {
	return (
		<HeaderWrapper className={className}>
			<HeaderTitle>Find Your Dream Job Here</HeaderTitle>
			<Search />
		</HeaderWrapper>
	);
};
