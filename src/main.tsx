import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App.tsx";
import "modern-normalize";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
);
