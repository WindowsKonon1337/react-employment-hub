import { FC } from "react";
import { MenuLinkItem } from "./styled";
import { MenuLinkProps } from "./types";

export const MenuLink: FC<MenuLinkProps> = ({ linkPath, title, className }) => (
	<MenuLinkItem to={linkPath} className={className}>
		{title}
	</MenuLinkItem>
);
