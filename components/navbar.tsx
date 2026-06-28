"use client";

import { useState } from "react";
import { Menu, X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <span className="text-primary">⬡</span>
          <span>ECLIPSE</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a href="#seasons" className="transition-colors hover:text-foreground">
            Episodes
          </a>
          <a href="#cast" className="transition-colors hover:text-foreground">
            Cast
          </a>
          <a href="#reviews" className="transition-colors hover:text-foreground">
            Reviews
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button size="sm" className="hidden md:inline-flex">
            <Play className="mr-2 h-4 w-4" />
            Watch Now
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground" onClick={() => setOpen(false)}>About</a>
            <a href="#seasons" className="text-sm text-muted-foreground transition-colors hover:text-foreground" onClick={() => setOpen(false)}>Episodes</a>
            <a href="#cast" className="text-sm text-muted-foreground transition-colors hover:text-foreground" onClick={() => setOpen(false)}>Cast</a>
            <a href="#reviews" className="text-sm text-muted-foreground transition-colors hover:text-foreground" onClick={() => setOpen(false)}>Reviews</a>
            <Button size="sm" className="mt-2">
              <Play className="mr-2 h-4 w-4" />
              Watch Now
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
