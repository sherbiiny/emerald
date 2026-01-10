import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to Emerald</h1>
      <p className="mt-4 text-lg">Your gateway to seamless notes management.</p>
    </div>
  );
}
