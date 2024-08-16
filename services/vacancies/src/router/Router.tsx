import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Loader } from "@packages/shared/src/components";

import { LazyVacancies } from "@/pages";
import { LazyVacancy } from "@/pages/Vacancy";
import { App } from "@/App";

const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/vacancies",
				element: (
					<Suspense fallback={<Loader />}>
						<LazyVacancies />
					</Suspense>
				),
			},
			{
				path: "/vacancy/:id",
				element: (
					<Suspense fallback={<Loader />}>
						<LazyVacancy />
					</Suspense>
				),
			},
		],
	},
];

export const router = createBrowserRouter(routes);

export default routes;
