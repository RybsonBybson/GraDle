import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { Toaster } from "react-hot-toast";

const rootElement = document.getElementById("root");

if (rootElement)
  createRoot(rootElement).render(
    <StrictMode>
      <Toaster position="top-right" />
    </StrictMode>
  );
else console.error("Couldn't find root!");
