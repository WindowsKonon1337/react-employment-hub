import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { App } from "@/App";
import { LazyCreateCompany, LazyProfile, CompanyLazy, CompaniesLazy, LazyResponse } from "@/pages";

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
		path: "/responses",
		element: <App />,
		children: [
			{
				path: "/responses",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<LazyResponse />
					</Suspense>
				),
			},
		],
	},
	{
		path: "/companies",
		element: <App />,
		children: [
			{
				path: "/companies",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<CompaniesLazy />
					</Suspense>
				),
			},
			{
				path: "/companies/:id",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<CompanyLazy />
					</Suspense>
				),
			},
		],
	},
];

export const router = createBrowserRouter(routes);

export default routes;
