import { createBrowserRouter } from "react-router-dom";

// @ts-ignore
import profileRoute from "profile/router";
// @ts-ignore
import vacanciesRoute from "vacancies/router";
import { Layout } from "@packages/shared";

import { LoginPage, RegistrationLazy } from "@/Page";
import { App } from "@/App";
import { Suspense } from "react";

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
				<Suspense fallback={<div>Loading...</div>}>
					<LoginPage />
				</Suspense>
			</Layout>
		),
	},
	{
		path: "registration",
		element: (
			<Layout>
				<Suspense fallback={<div>Loading...</div>}>
					<RegistrationLazy />
				</Suspense>
			</Layout>
		),
	},
]);
