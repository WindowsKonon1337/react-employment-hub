import { Layout } from "@packages/shared";
import { Outlet } from "react-router-dom";

import { SideMenu } from "./components";
import { BarsMenuBlock, CloseBuregerMenuBtn, ProfileWrapper, SideMenuWrapper } from "./styled";
import { useOutsideClick } from "@packages/shared/src/hooks";

export const App = () => {
	const { isOpen, refContainer, setIsOpen } = useOutsideClick<HTMLDivElement>({
		isOpenValue: false,
	});

	return (
		<Layout>
			<ProfileWrapper>
				<BarsMenuBlock onClick={() => setIsOpen(true)} />
				<SideMenuWrapper $isOpen={isOpen} ref={refContainer}>
					<CloseBuregerMenuBtn onClick={() => setIsOpen(false)} />
					<SideMenu links={[]} />
				</SideMenuWrapper>
				<Outlet />
			</ProfileWrapper>
		</Layout>
	);
};
