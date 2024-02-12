import { HeaderLink } from "./components";
import { HeaderContainer } from "./styled";

export const Header = () => {
	return (
		<HeaderContainer>
			<div>logo</div>
			<HeaderLink linkPath="vacancies" linkTitle="vacancies" />
			<div>profile</div>
		</HeaderContainer>
	);
};
