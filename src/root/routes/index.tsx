import { Home, Tech } from "@pages/index";
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
        element: ""
    },
    {
      path: RouteTypes.Contact,
      element: ""
  }
  ]);

export const Routes = () => {
    return (
        <RouterProvider router={router} />
    )
};