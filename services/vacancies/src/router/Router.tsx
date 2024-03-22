import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { App } from "@/App";
import { LazyVacancies } from "@/pages";
import { LazyVacancy } from "@/pages/Vacancy";

const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/vacancies",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<LazyVacancies />
					</Suspense>
				),
			},
			{
				path: "/vacancies/:id",
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
