import { Flashcard } from "./card";
import { type CardSet } from "./page";

export function GridView({ cardSet }: { cardSet?: CardSet }) {
  return (
    <div className="xl:gird-cols-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:gap-6 xl:grid-cols-3 xl:gap-8">
      {cardSet
        ? cardSet.cards.map((card) => {
            return (
              <div key={card.front.heading} className="max-w-3xl">
                <Flashcard card={card} />
              </div>
            );
          })
        : null}
    </div>
  );
}
