import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../MainPage/MainPage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: MainPage,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
