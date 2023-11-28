import Link from "next/link";
import "@/styles/menu-card.css";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { type CardSet } from "./[slug]/page";

export function MenuCard({
  cardSet,
}: {
  cardSet: CardSet;
}): React.ReactElement {
  return (
    <Link
      aria-label={cardSet.title}
      aria-description={cardSet.description}
      className="max-w-full"
      href={`/${cardSet.slug}`}
    >
      <Card className="h-48 min-h-min w-full min-w-full max-w-[580px] flex-row gap-6 p-4 md:flex">
        <div className="cardSlot hidden w-full max-w-[13.75rem] md:block">
          <div className="bottomCard" />
          <div className="middleCard" />
          <div className="topCard">{cardSet.cards[0]?.front.heading}</div>
        </div>
        <div>
          <CardTitle className="whitespace-break-spaces text-lg font-semibold">
            {cardSet.title}
          </CardTitle>
          <CardDescription className="line-clamp-5">
            {cardSet.description}
          </CardDescription>
        </div>
      </Card>
    </Link>
  );
}
