import { Home, Tech, Projects, Contact } from "@pages/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouteTypes } from "@global/constants/routes";

const router = createBrowserRouter([
    {
        path: RouteTypes.Home,
        element: <Home />,
    },
    {
        path: RouteTypes.Tech,
        element: <Tech />,
    },
    {
        path: RouteTypes.Projects,
        element: <Projects />
    },
    {
      path: RouteTypes.Contact,
      element: <Contact />
  }
  ]);

export const Routes = () => <RouterProvider router={router} />