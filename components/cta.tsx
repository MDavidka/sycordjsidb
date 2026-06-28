import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Monitor, Tablet, Smartphone } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_60%)]" />

      <div className="container relative z-10 mx-auto flex flex-col items-center gap-8 px-4 py-24 text-center">
        <Badge variant="secondary">Start Watching Today</Badge>

        <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to experience the phenomenon?
        </h2>

        <p className="max-w-xl text-lg text-muted-foreground">
          All three seasons available now. Stream in 4K HDR on any device,
          anywhere in the world.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="xl">
            <Play className="mr-2 h-5 w-5" />
            Start Streaming
          </Button>
          <Button variant="outline" size="xl">
            Download S1 Free
          </Button>
        </div>

        <div className="mt-8 flex items-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2 text-sm">
            <Monitor className="h-4 w-4" />
            <span>4K TV</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Tablet className="h-4 w-4" />
            <span>Tablet</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Smartphone className="h-4 w-4" />
            <span>Mobile</span>
          </div>
        </div>
      </div>
    </section>
  );
}
