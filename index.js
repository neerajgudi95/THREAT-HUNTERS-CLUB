import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(process.env.SYNCFUSION_LICENSE);

import { routes } from "./routes";
import { UserContextProvider } from "./src/GlobalContexts/UserContextProvider";

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(
  <UserContextProvider>
    <RouterProvider router={routes} />
  </UserContextProvider>
);
