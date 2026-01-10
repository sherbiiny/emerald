import { createRootRoute, Outlet } from "@tanstack/react-router";
import { AppSidebar } from "@/components/AppSidebar";
import AppNavbar from "@/components/AppNavbar";
import AppNotFound from "@/components/AppNotFound";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: AppNotFound,
});

export function RootComponent() {
  return (
    <div className="flex w-full">
      <AppSidebar />
      <div className="flex-1 min-h-screen flex flex-col">
        <AppNavbar />
        <div className="flex-1 pt-16 pb-32 pl-10 pr-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
