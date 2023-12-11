import { type CardSet } from "./page";

export function StackView({ cardSet }: { cardSet?: CardSet }) {
  return (
    <div className="absolute flex h-full w-full flex-col items-center justify-center text-muted-foreground">
      <p>Coming soon!</p>
    </div>
  );
}
