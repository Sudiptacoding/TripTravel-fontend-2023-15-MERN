import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import About from "../pages/About/About";
import AdminRoot from "../layouts/Admin/AdminRoot";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AdminProtectRouts from "../ProtectedRoute/AdminProtectRouts";
import UsersProfile from "../pages/Users/UsersProfile";
import UserRoot from "../layouts/User/UserRoot";
import Blogs from "../pages/Blogs/Blogs";
import Community from "../pages/Community/Community";
import Contact from "../pages/Contact/Contact";
import MyProfile from "../pages/Admin/MyProfile";
import AddPackage from "../pages/Admin/AddPackage";
import ManageUsers from "../pages/Admin/ManageUsers";
import MyBookings from "../pages/Users/MyBookings";
import MyWishlist from "../pages/Users/MyWishlist";
import ToureGuideRoot from "../layouts/ToureGuide/ToureGuideRoot";
import GuideProfile from "../pages/ToureGuide/GuideProfile";
import MyAssignedTour from "../pages/ToureGuide/MyAssignedTour";
import PackageDetails from "../pages/PackageDetails/PackageDetails";
import AllPackage from "../pages/AllPackage/AllPackage";
import ToureTypePage from "../pages/ToureTypePage/ToureTypePage";
import StoryDetails from "../pages/StoryDetails/StoryDetails";
import AllStory from "../pages/AllStory/AllStory";
import Newslate from "../common/Newslate";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "registration",
                element: <Registration></Registration>,
            },
            {
                path: "about",
                element: <ProtectedRoute><About></About></ProtectedRoute>,
            },
            {
                path: "blog",
                element: <ProtectedRoute><Blogs></Blogs></ProtectedRoute>,
            },
            {
                path: "community",
                element: <ProtectedRoute> <Community></Community></ProtectedRoute>,
            },
            {
                path: "packages",
                element: <ProtectedRoute><AllPackage></AllPackage></ProtectedRoute>,
            },
            {
                path: "contract",
                element: <ProtectedRoute><Contact></Contact></ProtectedRoute>,
            },
            {
                path: "newslate",
                element: <ProtectedRoute><Newslate></Newslate></ProtectedRoute>,
            },
            {
                path: "allStory",
                element: <ProtectedRoute><AllStory></AllStory></ProtectedRoute>,
            },
            {
                path: "/tourtype/:type",
                element: <ProtectedRoute><ToureTypePage></ToureTypePage></ProtectedRoute>,
            },
            {
                path: "/details/:id",
                element: <ProtectedRoute><PackageDetails></PackageDetails></ProtectedRoute>,
            },
            {
                path: "/story/:id",
                element: <ProtectedRoute><StoryDetails></StoryDetails></ProtectedRoute>,
            },

        ],
    },

    // Admin
    {
        path: "admin-dashboard",
        element: <ProtectedRoute><AdminRoot></AdminRoot></ProtectedRoute>,
        children: [
            {
                path: "admin",
                element: <AdminProtectRouts><MyProfile></MyProfile></AdminProtectRouts>
            },
            {
                path: "addpackage",
                element: <AdminProtectRouts><AddPackage></AddPackage></AdminProtectRouts>
            },
            {
                path: "manageusers",
                element: <AdminProtectRouts><ManageUsers></ManageUsers></AdminProtectRouts>
            },
        ],
    },

    // User
    {
        path: "user-dashboard",
        element: <ProtectedRoute><UserRoot></UserRoot></ProtectedRoute>,
        children: [

            // Normal User
            {
                path: "users",
                element: <UsersProfile></UsersProfile>
            },
            {
                path: "mybookings",
                element: <MyBookings></MyBookings>
            },
            {
                path: "mywishlist",
                element: <MyWishlist></MyWishlist>
            },
        ],
    },

    // Guide /toureguide-dashboard/guide

    {
        path: "toureguide-dashboard",
        element: <ProtectedRoute><ToureGuideRoot></ToureGuideRoot></ProtectedRoute>,
        children: [

            // Normal User
            {
                path: "guide",
                element: <GuideProfile></GuideProfile>
            },
            {
                path: "guideassign",
                element: <MyAssignedTour></MyAssignedTour>
            },

        ],
    },


]);
export default router;