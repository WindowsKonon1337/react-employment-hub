import { App } from "@/App";
import { LazyAbout } from "@/pages/Profile";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/profile',
            element: <Suspense fallback={<div>Loading...</div>}><LazyAbout /></Suspense>
        }
      ]
    },
  ]

export const router = createBrowserRouter(routes);

export default routes