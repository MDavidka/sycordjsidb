import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight">
              <span className="text-primary">⬡</span>
              <span>ECLIPSE</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              The award-winning sci-fi series.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Series</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="transition-colors hover:text-foreground">About</a></li>
              <li><a href="#seasons" className="transition-colors hover:text-foreground">Episodes</a></li>
              <li><a href="#cast" className="transition-colors hover:text-foreground">Cast</a></li>
              <li><a href="#reviews" className="transition-colors hover:text-foreground">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-foreground">FAQ</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Contact</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Press Kit</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Stream On</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-foreground">Netflix</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Prime Video</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Apple TV+</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">HBO Max</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Eclipse Studios. All rights reserved.
          </p>
          <Badge variant="outline" className="text-xs">
            A Sycord Production
          </Badge>
        </div>
      </div>
    </footer>
  );
}
