"use client";

import { MousePointerClick } from "lucide-react";
import { useState } from "react";
import { cn } from "@/components/lib/utils";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import "@/styles/flashcards.css";

export function Flashcard({
  card,
  index,
}: {
  card: { front: string; back: string; def: string };
  index?: number;
}): React.ReactElement {
  const [flipped, setFlipped] = useState(false);
  const [touched, setTouched] = useState(false);

  return (
    <button
      className={cn(
        "flashcard min-w-full max-w-6xl cursor-default",
        flipped && "flipped",
      )}
      onClick={() => {
        setFlipped(!flipped);
        setTouched(true);
      }}
      type="button"
    >
      <div className="card">
        <Card className="front flex items-center justify-center bg-white px-16 text-4xl">
          <CardTitle className="select-none">{card.front}</CardTitle>
          {!touched && index === 0 && (
            <CardContent className="tooltip bg-card text-muted-foreground absolute bottom-4 flex flex-row flex-nowrap items-center gap-2 p-2 text-lg">
              <MousePointerClick className="h-5 w-5" /> Click the card to flip
            </CardContent>
          )}
        </Card>
        <Card className="back flex flex-col items-center justify-center gap-4 text-4xl">
          <CardTitle className="select-none text-lg">{card.back}</CardTitle>
          <CardContent className="text-sm">{card.def}</CardContent>
        </Card>
      </div>
    </button>
  );
}
