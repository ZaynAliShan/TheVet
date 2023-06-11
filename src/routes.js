import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import UserDashboardLayout from "./layouts/userDashboard";
import DoctorDashboardLayout from "./layouts/doctorDashboard";
import SimpleLayout from "./layouts/simple";
//
import UserAppointmentsPage from "./pages/UserAppointmentsPage";
import DoctorAppointmentsPage from "./pages/DoctorAppointmentsPage";
import AdminAppointmentsPage from "./pages/AdminAppointmentPage";
import PatientPage from "./pages/PatientPage";
import EditPatient from "./pages/EditPatient";
import EditDoctor from "./pages/EditDoctor";
//import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import DoctorPage from "./pages/DoctorPage";
import DoctorForm from "./components/DoctorForm";
import DashboardAppPage from "./pages/DashboardAppPage";
import Navbar from "./components/Navbar";
import Doctors from "./components/Doctors";
import Services from "./components/Services";
import Appointments from "./components/Appointments";
import EmailVerify from "./components/EmailVerify";
import UserAppointmentsForm from "./components/userAppointmentsForm";
//import Blog from "./components/Blog";
//import FAQ from "./components/FAQs";
import Footer from "./components/Footer";
import SignInSide from "./components/SignInSide";
import About from "./components/About";
import Contact from "./components/ContactUs";
import Login from "./components/Login";
import Home from "./components/Home";
import AddPatient from "./components/AddPatient";
import EditAppointments from "./pages/EditAppointment";
import AddData from "./components/AddData";

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
        {
          path: "api/auth/:id/verify/:authToken",
          element: [<Navbar />, <EmailVerify />, <Footer />],
        },
        { path: "about", element: [<Navbar />, <About />, <Footer />] },
        { path: "contact", element: [<Navbar />, <Contact />, <Footer />] },
        { path: "signup", element: [<Navbar />, <SignInSide />, <Footer />] },
        { path: "addData", element: [<Navbar />, <AddData />, <Footer/>]},
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "app", element: <DashboardAppPage /> },
        { path: "apppointments", element: <AdminAppointmentsPage /> },
        { path: "doctor", element: <DoctorPage /> },
        { path: "RegisterDoctor", element: <DoctorForm /> },
        { path: "editDoctors/:id", element: <EditDoctor /> },
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
        { path: "userApppointments", element: <UserAppointmentsPage /> },
        { path: "addPatient", element: <AddPatient /> },
        { path: "showPatients", element: <PatientPage /> },
        { path: "editPatients/:id", element: <EditPatient /> },
        { path: "editAppt/:id", element: <EditAppointments /> },
      ],
    },
    {
      path: "/doctorDashboard",
      element: <DoctorDashboardLayout />,
      children: [
        {
          element: <Navigate to="/doctorDashboard/myAppointment" />,
          index: true,
        },
        { path: "myAppointment", element: <DoctorAppointmentsPage /> },
        { path: "AddDataPage/:id", element: <AddData /> },
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
