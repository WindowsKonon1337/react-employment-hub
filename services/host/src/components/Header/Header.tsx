import { HeaderLink } from "./components";
import { HeaderContainer } from "./styled";

export const Header = () => {
	return (
		<HeaderContainer>
			<div>logo</div>
			<HeaderLink linkPath="vacancies" linkTitle="vacancies" />
			<HeaderLink linkPath="profile" linkTitle="profile" />
		</HeaderContainer>
	);
};
