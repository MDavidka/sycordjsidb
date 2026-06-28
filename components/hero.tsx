import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,hsl(var(--background))_100%)]" />

      <div className="container relative z-10 mx-auto flex flex-col items-center gap-8 px-4 pt-24 text-center">
        <Badge variant="secondary" className="text-sm">
          New Season Streaming Now
        </Badge>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
          The Darkness
          <br />
          <span className="text-primary">Will Rise</span>
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground">
          When a solar anomaly plunges Earth into eternal twilight, a team of
          scientists discovers that the true threat isn&apos;t the dying sun —
          it&apos;s what emerges from the shadows.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="xl">
            <Play className="mr-2 h-5 w-5" />
            Watch Trailer
          </Button>
          <Button variant="outline" size="xl">
            <Info className="mr-2 h-5 w-5" />
            More Info
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">8.7</span>
            <span>/ 10 IMDb</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">96%</span>
            <span>Rotten Tomatoes</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">3</span>
            <span>Seasons</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">TV-MA</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
