import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Crousel from "./Crousel.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Crousel />
  </StrictMode>
);
