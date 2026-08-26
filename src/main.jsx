import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./app/router/router";
import i18n from "./app/i18n/i18n";
import "./shared/styles/index.module.scss";
createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>,
);
