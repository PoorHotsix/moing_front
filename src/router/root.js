import { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import moimRouter from "./moingRouter";


const Loading = <div>Loading....</div>
const Main = lazy(() => import("../pages/MainPage"))
const ChatMessage = lazy(() => import ("../components/Message/ChatMessage"))
const SearchGroup = lazy(() => import ("../components/Main/SearchGroup"))
const CreateMoimPage = lazy(()=>import("../pages/CreateMoimPage"))
const IntroductionMoimPage = lazy(()=>import("../pages/IntroductionMoimPage"))
const LoginPage = lazy(() => import("../components/menus/LoginPage"));
const SignupPage = lazy(() => import("../components/menus/SignupPage"));

const root = createBrowserRouter([

  {
    path: "/login",
    element: <Suspense fallback={Loading}><LoginPage /></Suspense>,
  },
  {
    path: "/signup",
    element: <Suspense fallback={Loading}><SignupPage /></Suspense>,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
  {
    path: "",
    element: <Suspense fallback={Loading}><Main/></Suspense>
  },
  {
    path: "chat/:gatheringId",
    element: <Suspense fallback={Loading}><ChatMessage/></Suspense>
  },
  {
    path: "/search",
    element: <Suspense fallback={Loading}><SearchGroup/></Suspense>
  },
  {

    path: "/create-moim",
    element: <Suspense fallback={Loading}><CreateMoimPage/></Suspense>
  },
  {
    path: "introduct-moim/:moimid",
    element: <Suspense fallback={Loading}><IntroductionMoimPage/></Suspense>,
    children: moimRouter()
  }



])

export default root;
