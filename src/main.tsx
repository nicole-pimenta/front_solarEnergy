import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AppThemeProvider, CalculateProvider } from "./providers";
import React from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <CalculateProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CalculateProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
