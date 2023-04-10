// component
import SvgColor from "../../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: "Make Appointment",
    path: "/userDashboard/makeAppointment",
    icon: icon("ic_analytics"),
  },
  {
    title: "My Apppointments",
    path: "/userDashboard/userApppointments",
    icon: icon("ic_user"),
  },
  {
    title: "Add Patient",
    path: "/userDashboard/addPatient",
    icon: icon("ic_cart"),
  },
  {
    title: "Show Patient",
    path: "/userDashboard/showPatients",
    icon: icon("ic_cart"),
  },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
