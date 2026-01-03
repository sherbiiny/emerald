import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import Root from "./Root";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";

const rootRoute = createRootRoute({
  component: () => <Root />,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Home />,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => <Login />,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: () => <Register />,
});

const routeTree = rootRoute.addChildren([homeRoute, loginRoute, registerRoute]);

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

export default function Router() {
  return <RouterProvider router={router} />;
}
