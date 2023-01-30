import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Navbar from './components/Navbar';
import Doctors from "./components/Doctors";
import Services from "./components/Services";
import Appointments from "./components/Appointments";
import Blog from "./components/Blog";
import FAQ from "./components/FAQs";
import Footer from "./components/Footer";
import SignInSide from "./components/SignInSide";
import About from "./components/About";
import Contact from "./components/ContactUs";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/' ,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: 'home', element: [<Navbar />, <Doctors />, <Services />, <Appointments /> , <SignInSide />, <FAQ />, <Blog />, <Footer />]},
        {path : 'doctors', element : [<Navbar />, <Doctors />, <Footer />]},
        {path: 'appointment', element : [<Navbar/>,<Appointments />, <Footer />]},
        {path: 'services', element : [<Navbar/>,<Services />, <Footer />]},
        {path: 'about', element : [<Navbar/>,<About />, <Footer />]},
        {path: 'contact', element : [<Navbar/>,<Contact />, <Footer />]},
        {path: 'signUp', element : [<Navbar/>,<SignInSide />, <Footer />]}
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
  return routes;
}
