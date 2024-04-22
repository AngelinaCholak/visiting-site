import React from "react";
import ReactDOM from "react-dom";
import { App } from "App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "components/LanguageSelector/LanguageContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/visiting-site">
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
