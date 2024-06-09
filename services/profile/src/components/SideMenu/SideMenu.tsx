import { FC, useEffect, useState } from "react";
import { Button } from "@packages/shared/src/components";

import { LinksBlock, MenuWrapper } from "./styled";
import { SideMenuProps } from "./types";
import { MenuLink } from "./components";
import { linkData } from "./linkData";

export const SideMenu: FC<SideMenuProps> = ({ links }) => {
	const [currentLinks, setCurrentLinks] = useState(linkData);

	useEffect(() => {
		if (links.length > 0) {
			setCurrentLinks(links);
		}
	}, [links]);

	const handleLogout = () => {
		console.log("logout");
	};
	return (
		<MenuWrapper>
			<LinksBlock>
				{currentLinks.map((link) => (
					<MenuLink linkPath={link.linkPath} title={link.title} key={`MenuLink_${link.title}`} />
				))}
			</LinksBlock>
			<Button clickFuntcion={handleLogout}>logout</Button>
		</MenuWrapper>
	);
};
