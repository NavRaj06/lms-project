import Courses from "../Pages/Courses";
import LandingPage from "../Pages/LandingPage";

const publicRoutes = [
  {
    path: "/",
    component: <LandingPage />,
  },
  {
    path: "/courses",
    component: <Courses />,
  },
];
export { publicRoutes };
