import { createBrowserRouter } from "react-router-dom";

import { App } from "@/App";
// @ts-ignore
import profileRoute from "profile/router";
// @ts-ignore
import vacanciesRoute from "vacancies/router";

const routes = [
	{
		path: "/",
		element: <App />,
		children: [...vacanciesRoute, ...profileRoute],
	},
];

export const router = createBrowserRouter(routes);
