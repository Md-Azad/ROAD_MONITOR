import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUP/SignUp";
import AuthSign from "../pages/AuthSign/AuthSign";
import AuthLogin from "../pages/AuthLogin/AuthLogin";
import CreateReport from "../UserDashboard/CreateReport";
import AuthDashboard from "../AuthDashboard/AuthDashboard";
import Issues from "../UserDashboard/Issues";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/authsignup",
            element: <AuthSign></AuthSign>
        },
        {
            path: "/authlogin",
            element: <AuthLogin></AuthLogin>
        },
        {
            path: "/userhome",
            element: <CreateReport></CreateReport>
        },
        {
            path: "/authhome",
            element: <AuthDashboard></AuthDashboard>
        },
        {
            path: "/issues",
            element: <Issues></Issues>
        }
      ]
    },
  ]);
  