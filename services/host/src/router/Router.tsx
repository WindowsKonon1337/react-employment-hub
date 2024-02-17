import { createBrowserRouter } from "react-router-dom";

// @ts-ignore
import profileRoute from "profile/router";
// @ts-ignore
import vacanciesRoute from "vacancies/router";
import { Layout } from "@packages/shared";

import { LoginPage } from "@/Page/Login";
import { App } from "@/App";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [...vacanciesRoute, ...profileRoute],
	},
	{
		path: "login",
		element: (
			<Layout>
				<LoginPage />
			</Layout>
		),
	},
]);
