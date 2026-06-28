import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Calendar, Languages, Film } from "lucide-react";

export function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <Badge variant="outline" className="w-fit">
            About the Show
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The end of light is just the beginning
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            <strong className="text-foreground">ECLIPSE</strong> follows Dr. Sarah Chen and her
            team at the International Solar Observatory as they race to understand an unprecedented
            cosmic event — a shadow spreading across the Sun. As twilight engulfs the planet,
            hidden truths about human consciousness, ancient civilizations, and the nature of
            reality itself come to light.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Created by award-winning showrunner Marcus Webb, the series blends hard science
            fiction with psychological thriller elements. Each episode peels back another layer
            of the mystery, keeping viewers on the edge of their seats.
          </p>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Sci-Fi</Badge>
            <Badge variant="secondary">Thriller</Badge>
            <Badge variant="secondary">Drama</Badge>
            <Badge variant="secondary">Mystery</Badge>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
              <Clock className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold">48m</span>
              <span className="text-xs text-muted-foreground">Avg. Runtime</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
              <Calendar className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold">2023</span>
              <span className="text-xs text-muted-foreground">Premiere</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
              <Languages className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold">12</span>
              <span className="text-xs text-muted-foreground">Languages</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
              <Film className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold">30</span>
              <span className="text-xs text-muted-foreground">Episodes</span>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
