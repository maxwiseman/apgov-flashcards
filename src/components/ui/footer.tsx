"use client";

import { IconSun } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function Footer() {
  const { setTheme, theme } = useTheme();

  return (
    <footer className="flex w-screen items-center justify-between px-2 py-8 text-muted-foreground md:px-4 lg:px-6 xl:px-16">
      <span>
        © 2023{" "}
        <Link className="hover:underline" href={"https://github.com/CrazyBalz"}>
          Ian Steiger
        </Link>{" "}
        and{" "}
        <Link
          className="hover:underline"
          href={"https://github.com/maxwiseman"}
        >
          Max Wiseman
        </Link>
      </span>
      <div className="flex flex-row items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
              <IconSun className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem
              onSelect={() => {
                setTheme("system");
              }}
              checked={theme == "system"}
            >
              System
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              onSelect={() => {
                setTheme("dark");
              }}
              checked={theme == "dark"}
            >
              Dark
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              onSelect={() => {
                setTheme("light");
              }}
              checked={theme == "light"}
            >
              Light
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href={`https://github.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}`}
          target="_blank"
          aria-label="View the source on GitHub"
        >
          <Button variant={"outline"} size={"icon"}>
            <GitHubLogoIcon className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </footer>
  );
}
