import { Link } from "@tanstack/react-router";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AppNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="mb-8">
        <h1 className="text-9xl font-bold text-muted-foreground/20 dark:text-muted-foreground/10 mb-4">
          404
        </h1>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Search className="h-6 w-6 text-muted-foreground" />
          <h2 className="text-3xl font-semibold text-foreground">
            Page Not Found
          </h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        <Button asChild variant="default" size="lg">
          <Link to="/">
            <Home className="h-4 w-4" />
            Go Home
          </Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => window.history.back()}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
}
