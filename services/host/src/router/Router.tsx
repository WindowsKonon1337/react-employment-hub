import { createBrowserRouter } from "react-router-dom";

import { App } from "@/App";
// @ts-ignore
import profileRoute from 'profile/Router'
// @ts-ignore
import vacanciesRoute from 'vacancies/Router'


const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        ...profileRoute,
        ...vacanciesRoute,
      ]
    },
]


export const router = createBrowserRouter(routes);