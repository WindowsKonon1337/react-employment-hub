import { FC } from "react";

import { HeaderLinkProps } from "./types";
import { HeaderLinkWrapper } from "./styled";

export const HeaderLink: FC<HeaderLinkProps> = ({ linkPath, linkTitle, isChoise, className }) => {
	return (
		<HeaderLinkWrapper to={linkPath} isChoise={isChoise} className={className}>
			{linkTitle}
		</HeaderLinkWrapper>
	);
};
