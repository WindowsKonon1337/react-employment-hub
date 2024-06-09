import { Layout } from "@packages/shared";
import { Outlet } from "react-router-dom";

import { SideMenu } from "./components";
import { ProfileWrapper } from "./styled";

export const App = () => {
	return (
		<Layout>
			<ProfileWrapper>
				<SideMenu links={[]} />
				<Outlet />
			</ProfileWrapper>
		</Layout>
	);
};
