import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import { Toaster } from "react-hot-toast";
import Offcanvasbar from "./templates/offcanvasbar.jsx";

const rootElement = document.getElementById("root");

if (rootElement)
  createRoot(rootElement).render(
    <StrictMode>
      <Toaster position="top-right" />
      <Offcanvasbar />
    </StrictMode>
  );
else console.error("Couldn't find root!");
