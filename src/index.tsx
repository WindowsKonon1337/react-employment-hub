import {createRoot} from 'react-dom/client';
import { Suspense } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import { App } from './components/App';
import { LazyVacancies } from '@/pages/Vacancies/Vacancies.lazy';
import { LazyAbout } from '@/pages/About/About.lazy';


const root = document.getElementById("root")

if(!root) {
    throw new Error("root not found")
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/vacancies',
            element: <Suspense fallback={<div>Loading...</div>}><LazyVacancies /></Suspense>
        },
        {
            path: '/about',
            element: <Suspense fallback={<div>Loading...</div>}><LazyAbout /></Suspense>
        }
      ]
    },
  ]);
  

const container  = createRoot(root);

container.render(<RouterProvider router={router} />)