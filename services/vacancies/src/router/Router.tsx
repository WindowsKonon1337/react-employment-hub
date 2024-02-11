import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { App } from "@/App";
import { LazyVacancies } from "@/pages/About/Vacancies.lazy";


const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/vacancies',
            element: <Suspense fallback={<div>Loading...</div>}><LazyVacancies /></Suspense>
        }
      ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;