"use client";

import { cn } from "@/components/lib/utils";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import "@/styles/flashcards.css";
import { useState } from "react";

export function Flashcard({
  card,
}: {
  card: { front: string; back: string; def: string };
  index?: number;
}): React.ReactElement {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      className={cn(
        "flashcard min-w-full max-w-6xl cursor-default",
        flipped && "flipped",
      )}
      onClick={() => {
        setFlipped(!flipped);
      }}
      type="button"
    >
      <div className="card">
        <Card className="front flex items-center justify-center bg-white px-16 text-4xl">
          <CardTitle className="select-none">{card.front}</CardTitle>
        </Card>
        <Card className="back flex flex-col items-center justify-center gap-4 p-6">
          <CardTitle className="select-none text-xl">{card.back}</CardTitle>
          <CardContent className="text-sm text-muted-foreground">
            {card.def}
          </CardContent>
        </Card>
      </div>
    </button>
  );
}
