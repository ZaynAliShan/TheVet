import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import UserDashboardLayout from "./layouts/userDashboard";
import SimpleLayout from "./layouts/simple";
//
import BlogPage from "./pages/BlogPage";
import UserPage from "./pages/UserPage";
//import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import ProductsPage from "./pages/ProductsPage";
import DashboardAppPage from "./pages/DashboardAppPage";
import Navbar from "./components/Navbar";
import Doctors from "./components/Doctors";
import Services from "./components/Services";
import Appointments from "./components/Appointments";
import UserAppointmentsForm from "./components/userAppointmentsForm";
//import Blog from "./components/Blog";
//import FAQ from "./components/FAQs";
import Footer from "./components/Footer";
import SignInSide from "./components/SignInSide";
import About from "./components/About";
import Contact from "./components/ContactUs";
import Login from "./components/Login";
import Home from "./components/Home";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: "home", element: [<Navbar />, <Home />, <Footer />] },
        { path: "doctors", element: [<Navbar />, <Doctors />, <Footer />] },
        {
          path: "appointment",
          element: [<Navbar />, <Appointments />, <Footer />],
        },
        { path: "services", element: [<Navbar />, <Services />, <Footer />] },
        { path: "about", element: [<Navbar />, <About />, <Footer />] },
        { path: "contact", element: [<Navbar />, <Contact />, <Footer />] },
        { path: "signup", element: [<Navbar />, <SignInSide />, <Footer />] },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "app", element: <DashboardAppPage /> },
        { path: "apppointments", element: <UserPage /> },
        { path: "products", element: <ProductsPage /> },
        { path: "blog", element: <BlogPage /> },
      ],
    },
    {
      path: "/userDashboard",
      element: <UserDashboardLayout />,
      children: [
        {
          element: <Navigate to="/userDashboard/makeAppointment" />,
          index: true,
        },
        { path: "makeAppointment", element: <UserAppointmentsForm /> },
        { path: "userApppointments", element: <UserPage /> },
      ],
    },
    {
      path: "login",
      element: [<Navbar />, <Login />, <Footer />],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
  return routes;
}
