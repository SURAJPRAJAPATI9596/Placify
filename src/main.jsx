import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/variables.css";
import App from "./App/App";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
});

import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
