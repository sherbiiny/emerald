import { Home, LogIn, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Link } from "@tanstack/react-router";

const items = [
  { title: "Home", to: "/", icon: () => <Home /> },
  { title: "Login", to: "/login", icon: () => <LogIn /> },
  { title: "Register", to: "/register", icon: () => <User /> },
];

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className='flex flex-row items-center py-4'>
        <img src='/appicon.png' alt='Logo' className='h-8 w-8' />
        <span className='text-2xl font-bold'>Emerald</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.to} className='flex items-center gap-2'>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
};
