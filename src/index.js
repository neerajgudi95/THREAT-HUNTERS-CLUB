import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { routes } from "./routes";

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(<RouterProvider router={routes} />);
