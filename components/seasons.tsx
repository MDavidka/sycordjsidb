"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Clock, Star } from "lucide-react";

const seasons = [
  {
    id: "s1",
    number: 1,
    year: "2023",
    episodes: [
      { title: "First Contact", duration: "52m", rating: 8.4, description: "Dr. Chen detects an anomaly in the Sun's corona that defies all known physics." },
      { title: "The Long Shadow", duration: "48m", rating: 8.7, description: "As twilight spreads, governments scramble — and the first sightings are reported." },
      { title: "Beneath the Ice", duration: "50m", rating: 9.1, description: "An expedition to Antarctica reveals an ancient structure buried for millennia." },
      { title: "Signals", duration: "46m", rating: 8.6, description: "Radio telescopes pick up a pattern hidden within the solar interference." },
      { title: "The Awakening", duration: "51m", rating: 9.3, description: "Season finale. The team confronts the true nature of the shadow — and it changes everything." },
    ],
  },
  {
    id: "s2",
    number: 2,
    year: "2024",
    episodes: [
      { title: "Aftermath", duration: "49m", rating: 8.9, description: "In the wake of the finale, humanity adapts to a world of permanent twilight." },
      { title: "The Others", duration: "47m", rating: 9.0, description: "The shadow beings reveal their intentions — and they are not what anyone expected." },
      { title: "Fracture", duration: "50m", rating: 8.5, description: "A schism forms within the observatory team over how to respond." },
      { title: "The Message", duration: "48m", rating: 9.4, description: "Ancient texts from five continents align with the shadow beings' message." },
      { title: "Convergence", duration: "53m", rating: 9.2, description: "Season finale. All threads converge as the true purpose of the eclipse is revealed." },
    ],
  },
  {
    id: "s3",
    number: 3,
    year: "2025",
    episodes: [
      { title: "New Dawn", duration: "51m", rating: 9.0, description: "The third season opens with a discovery that could reverse the twilight — at a cost." },
      { title: "Alliances", duration: "46m", rating: 8.8, description: "Unexpected allies emerge from the shadows as a new threat appears." },
      { title: "The Price", duration: "50m", rating: 9.5, description: "Dr. Chen faces an impossible choice that will determine humanity's future." },
      { title: "Legacy", duration: "48m", rating: 9.1, description: "Flashbacks reveal the ancient civilization that faced the same event 12,000 years ago." },
      { title: "Eclipse", duration: "55m", rating: 9.7, description: "Series finale. Light and shadow collide in an epic conclusion to the saga." },
    ],
  },
];

export function Seasons() {
  return (
    <section id="seasons" className="container mx-auto px-4 py-24">
      <div className="mb-12 flex flex-col gap-3">
        <Badge variant="outline" className="w-fit">
          Episodes
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Three seasons of edge-of-your-seat storytelling
        </h2>
      </div>

      <Tabs defaultValue="s3">
        <TabsList className="mb-8">
          {seasons.map((s) => (
            <TabsTrigger key={s.id} value={s.id}>
              Season {s.number}
            </TabsTrigger>
          ))}
        </TabsList>

        {seasons.map((season) => (
          <TabsContent key={season.id} value={season.id}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {season.episodes.map((ep, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary">S{season.number}E{i + 1}</Badge>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {ep.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-primary" />
                          {ep.rating}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{ep.title}</CardTitle>
                    <CardDescription>{ep.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
