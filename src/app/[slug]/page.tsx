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
import { Button } from "@/components/ui/button";

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
            className="w-max text-lg font-medium"
          >
            <Button className="flex flex-row gap-2" variant={"ghost"}>
              <IconChevronLeft className="h-5 w-5" /> Back to sets
            </Button>
          </Link>
          <TabsList className="h-max p-1">
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
