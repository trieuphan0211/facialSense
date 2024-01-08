import { useRoutes } from "react-router-dom";
import { MainLayout } from "../layouts";
import { Homepage } from "../pages";
const context = "";
const Routers = () => {
  const routing = useRoutes([
    {
      path: context,
      element: <MainLayout />,
      children: [{ path: "/", element: <Homepage /> }],
    },
  ]);
  return routing;
};

export default Routers;
