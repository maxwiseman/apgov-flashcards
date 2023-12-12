import { Button } from "@/components/ui/button";
import { Flashcard } from "./card";
import { type CardSet } from "./page";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export function StackView({ cardSet }: { cardSet: CardSet }) {
  return (
    <div className="absolute flex h-full w-full flex-col items-center justify-center text-muted-foreground">
      <p className="z-50 mb-10 scroll-m-20 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
        Coming soon...
      </p>
      <div className="relative w-full max-w-2xl text-foreground">
        <Flashcard card={cardSet.cards[0]!} />
        <Button
          size={"icon"}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-background"
          variant={"outline"}
        >
          <IconChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          size={"icon"}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-background"
          variant={"outline"}
        >
          <IconChevronRight className="h-4 w-4" />
        </Button>
        <div
          className="absolute -inset-10 z-10 flex items-center justify-center backdrop-blur-3xl"
          style={{
            maskImage: "linear-gradient(0deg, #000 40%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}
