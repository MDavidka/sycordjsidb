import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const cast = [
  { name: "Gemma Arterton", role: "Dr. Sarah Chen", initials: "GA" },
  { name: "Idris Elba", role: "Commander David Okonkwo", initials: "IE" },
  { name: "Florence Pugh", role: "Dr. Maya Voss", initials: "FP" },
  { name: "Oscar Isaac", role: "Professor James Webb", initials: "OI" },
  { name: "Sandra Oh", role: "Dr. Yuki Tanaka", initials: "SO" },
  { name: "Dev Patel", role: "Arjun Mehta", initials: "DP" },
  { name: "Lupita Nyong&apos;o", role: "Ambassador Zuri", initials: "LN" },
  { name: "Mads Mikkelsen", role: "The Voice", initials: "MM" },
];

export function Cast() {
  return (
    <section id="cast" className="container mx-auto px-4 py-24">
      <div className="mb-12 flex flex-col gap-3">
        <Badge variant="outline" className="w-fit">
          Cast
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          An ensemble of world-class talent
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cast.map((actor) => (
          <Card key={actor.name}>
            <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="text-lg font-semibold">
                  {actor.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{actor.name}</p>
                <p className="text-sm text-muted-foreground">{actor.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
