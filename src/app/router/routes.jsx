import MainLayout from "../layouts/MainLayout";
import Home from "@/pages/home/HomePage";
import Services from "@/pages/services/ServicesPage";
import { frontRoutes } from "./frontRoutes/frontRoutes";
import Portfolio from "@/pages/portfolio/PortfolioPage";
import ServicesDetail from "@/widgets/portfolioPageSections/portfolio/servicesDetail/ServicesDetail";
import ProjectDetails from "@/pages/projectDetails/ProjectDetails";
import About from "@/pages/about/AboutPage";
import Contacts from "@/pages/contacts/ContactsPage";
import NotFound from "@/pages/notFound/NotFound";
import RootRedirect from "../appInit/rootRedirect/rootRedirect";
export const routes = [
  {
    path: "/",
    element: <RootRedirect />,
  },
  {
    path: "/:lang",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        meta: {
          isInMenu: false,
        },
      },

      {
        path: frontRoutes.serviceDetail,
        element: <ServicesDetail />,
        meta: { isInMenu: false },
      },
      {
        path: frontRoutes.services,
        element: <Services />,
        meta: {
          title: "services",
          isInMenu: true,
        },
      },
      {
        path: frontRoutes.portfolio,
        element: <Portfolio />,
        meta: {
          title: "portfolio",
          isInMenu: true,
        },
      },
      {
        path: frontRoutes.projectDetail,
        element: <ProjectDetails />,
        meta: { isInMenu: false },
      },
      {
        path: frontRoutes.about,
        element: <About />,
        meta: {
          title: "about",
          isInMenu: true,
        },
      },
      {
        path: frontRoutes.contacts,
        element: <Contacts />,
        meta: {
          title: "contact",
          isInMenu: true,
        },
      },
      {
        path: frontRoutes.notFound,
        element: <NotFound />,
        meta: { isInMenu: false },
      },
    ],
  },
];
