import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import SmartyPants from "../SmartyPants/SmartyPants";
import RetroStyle from "../RetroStyle/RetroStyle";
import TImeToTrip from "../TImeToTrip/TImeToTrip";
import SkillSwap from "../SkillSwap/SkillSwap";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: MainPage,
    },
    {
      path: "/smartypants",
      Component: SmartyPants,
    },
    {
      path: "/retrostyle",
      Component: RetroStyle,
    },
    {
      path: "/timetotrip",
      Component: TImeToTrip,
    },
    {
      path: "/skillswap",
      Component: SkillSwap,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
