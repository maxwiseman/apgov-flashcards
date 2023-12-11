import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sets } from "@/sets/sets";
import {
  IconChevronLeft,
  IconForms,
  IconLayoutGrid,
  IconSwipe,
} from "@tabler/icons-react";
import Link from "next/link";
import { GridView } from "./grid-view";
import { TypeView } from "./type-view";
import { StackView } from "./stack-view";

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
  const setData = sets.filter((set) => set.slug == params.slug)[0]!;
  return (
    <Tabs defaultValue="grid" className="min-h-screen">
      <div className="flex min-h-screen flex-col gap-2 p-2 md:p-4 lg:gap-6 lg:p-6 xl:gap-8 xl:p-16">
        <div className="flex items-center justify-between">
          <Link
            href={"/"}
            aria-label="Go back"
            className="flex w-max flex-row items-center gap-1 text-lg font-medium transition-[gap,font-weight] duration-300 ease-in-out hover:gap-2 hover:font-bold"
          >
            <IconChevronLeft className="h-6 w-6" /> Back to sets
          </Link>
          <TabsList>
            <TabsTrigger value="grid">
              <IconLayoutGrid className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="stack">
              <IconSwipe className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="type">
              <IconForms className="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="grid">
          <GridView cardSet={setData} />
        </TabsContent>
        <TabsContent value="stack" className="relative h-full flex-grow">
          <StackView cardSet={setData} />
        </TabsContent>
        <TabsContent value="type" className="relative h-full flex-grow">
          <TypeView cardSet={setData} />
        </TabsContent>
      </div>
    </Tabs>
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
