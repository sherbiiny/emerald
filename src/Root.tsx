import { Outlet } from "@tanstack/react-router";
import { AppSidebar } from "./components/AppSidebar";
import AppNavbar from "./components/AppNavbar";

export default function Root() {
  return (
    <>
      <div className='flex w-full'>
        <AppSidebar />
        <div className='flex-1 min-h-screen flex flex-col'>
          <AppNavbar />
          <div className='flex-1 pt-16 pb-32 pl-10 pr-10'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
