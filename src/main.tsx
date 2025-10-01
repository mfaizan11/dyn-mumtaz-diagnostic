import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; 
import { HelmetProvider } from "react-helmet-async"; 
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </HelmetProvider>
);
