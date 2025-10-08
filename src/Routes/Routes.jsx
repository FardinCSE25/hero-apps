import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Layout from "../Layout";
import Error from "../Pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('/TrendingApps.json'),
            },
              {
                path: "/apps",
                Component: Apps,
                loader: () => fetch('/AllApps.json')
            }
        ]
    },                           

]);

export default router