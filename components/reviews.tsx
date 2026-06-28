import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";

const reviews = [
  {
    quote: "The most ambitious science fiction series of the decade. Eclipse redefines what television can achieve.",
    author: "Emily Nussbaum",
    source: "The New Yorker",
    rating: 5,
  },
  {
    quote: "A masterclass in tension and world-building. Every episode leaves you desperate for the next.",
    author: "Alan Sepinwall",
    source: "Rolling Stone",
    rating: 5,
  },
  {
    quote: "Gemma Arterton delivers a career-defining performance. This is appointment television at its finest.",
    author: "Judy Berman",
    source: "TIME Magazine",
    rating: 5,
  },
  {
    quote: "Visually stunning and intellectually gripping. Eclipse joins the pantheon of great sci-fi storytelling.",
    author: "James Poniewozik",
    source: "The New York Times",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="container mx-auto px-4 py-24">
      <div className="mb-12 flex flex-col gap-3">
        <Badge variant="outline" className="w-fit">
          Reviews
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Critically acclaimed worldwide
        </h2>
      </div>

      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
            <span className="text-4xl font-bold text-primary">96%</span>
            <span className="text-sm text-muted-foreground">Tomatometer</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
            <span className="text-4xl font-bold text-primary">8.7</span>
            <span className="text-sm text-muted-foreground">IMDb Rating</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
            <span className="text-4xl font-bold text-primary">92</span>
            <span className="text-sm text-muted-foreground">Metacritic</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
            <span className="text-4xl font-bold text-primary">4.9</span>
            <span className="text-sm text-muted-foreground">Audience Score</span>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {reviews.map((review) => (
          <Card key={review.author}>
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-base leading-relaxed text-muted-foreground">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <Separator />
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">{review.author}</span>
                <span className="text-muted-foreground">{review.source}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
