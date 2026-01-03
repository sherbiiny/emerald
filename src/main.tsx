import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router.tsx";
import "./styles/index.css";
import { SidebarProvider } from "./components/ui/sidebar.tsx";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <SidebarProvider>
        <Router />
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>
);
