import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";


import { App } from "@/App";
import { LazyProfile } from "@/pages/Profile";

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/profile',
            element: <Suspense fallback={<div>Loading...</div>}><LazyProfile /></Suspense>
        }
      ]
    },
  ]

export const router = createBrowserRouter(routes);

export default routes