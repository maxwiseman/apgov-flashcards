import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

import type { CardSet } from "@/app/[slug]/page";
import { sets } from "@/sets/sets";
import { TRPCError } from "@trpc/server";

export const setRouter = createTRPCRouter({
  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ input }) => {
      let returnValue: CardSet | undefined;
      sets.forEach((set): void | CardSet => {
        if (set.slug == input.slug) returnValue = set;
      });
      if (!returnValue) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message:
            "An unexpected error occurred, please try again later. It's possible that this set was not found.",
        });
      }
      return returnValue;
    }),
  getAll: publicProcedure.query((): CardSet[] => {
    return sets;
  }),
});
