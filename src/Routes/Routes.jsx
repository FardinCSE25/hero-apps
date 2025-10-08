import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Layout from "../Layout";
import Error from "../Pages/Error";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('/AllApps.json'),
            },
              {
                path: "/apps",
                Component: Apps,
                loader: () => fetch('/AllApps.json')
            },
            {
                path: "/apps/:id",
                Component : AppDetails
            }
        ]
    }                         

]);

export default router