import { api } from "@/trpc/server";
import { MenuCard } from "./menu-card";

export default async function Page(): Promise<React.ReactElement> {
  const sets = await api.set.getAll.query();
  return (
    <div className="flex flex-col gap-8 p-2 md:p-4 lg:p-6 xl:p-16">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Sets
      </h2>
      <div className="grid max-w-full grid-cols-1 gap-2 md:grid-cols-1 lg:gap-6 xl:grid-cols-2 xl:gap-8">
        {sets.map((set) => {
          return <MenuCard key={set.slug} cardSet={set} />;
        })}
      </div>
    </div>
  );
}
