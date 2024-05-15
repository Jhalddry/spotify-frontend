import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { SpotifyWeb } from "./src/SpotifyWeb";

const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SpotifyWeb />
    </BrowserRouter>
  </React.StrictMode>
);
