import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { App } from "@/App";
import { LazyCreateCompany, LazyProfile, LazyVacancy } from "@/pages";

const routes = [
	{
		path: "/profile",
		element: <App />,
		children: [
			{
				path: "/profile",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<LazyProfile />
					</Suspense>
				),
			},
		],
	},
	{
		path: "/create",
		element: <App />,
		children: [
			{
				path: "company",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<LazyCreateCompany />
					</Suspense>
				),
			},
		],
	},
	{
		path: "/vacancy",
		element: <App />,
		children: [
			{
				path: "/vacancy",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<LazyVacancy />
					</Suspense>
				),
			},
		],
	},
];

export const router = createBrowserRouter(routes);

export default routes;
