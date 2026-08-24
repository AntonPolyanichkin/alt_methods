import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./app/router/router";
import i18n from "./app/i18n/i18n";
import AppInit from "./app/appInit/AppInit";
createRoot(document.getElementById("root")).render(
  <>
    <AppInit />
    <RouterProvider router={router} />
  </>,
);
