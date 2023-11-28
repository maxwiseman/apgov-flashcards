import { Flashcard } from "./card";
import { sets } from "@/sets/sets";

export function generateStaticParams(): { slug: string }[] {
  return sets.map((set) => {
    return { slug: set.slug };
  });
}

export default function Page({
  params,
}: {
  params: { slug: string };
}): React.ReactElement {
  // const setData = await api.set.getBySlug
  //   .query({ slug: params.slug })
  //   .catch(() => {
  //     console.error(`Something went wrong when fetching set ${params.slug}!`);
  //   });
  const setData = sets.filter((set) => set.slug == params.slug)[0];
  return (
    <>
      <div className="xl:gird-cols-4 grid grid-cols-1 gap-2 p-2 md:grid-cols-2 md:p-4 lg:gap-6 lg:p-6 xl:grid-cols-3 xl:gap-8 xl:p-16">
        {setData
          ? setData.cards.map((card) => {
              return (
                <div key={card.front.heading} className="max-w-3xl">
                  <Flashcard card={card} />
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

export interface CardSet {
  title: string;
  slug: string;
  description: string;
  cards: {
    front: { heading: string; subheading?: string };
    back: { heading: string; description: string };
  }[];
}
