import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <React.StrictMode>
      <App config={{ title: "StrictMode", projectId }} />
    </React.StrictMode>
    <App config={{ title: "Lax", projectId }} />
  </>
);
