import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Bill of Rights Flashcards",
  description: "Created by Max Wiseman and Ian Steiger",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <main className="min-h-screen">
          <TRPCReactProvider cookies={cookies().toString()}>
            {children}
          </TRPCReactProvider>
        </main>
        <footer className="mt-4 flex w-screen items-center justify-between bg-gray-100 p-8 text-black">
          © 2023 Ian Steiger and Max Wiseman
          <div className="flex flex-row">
            <Link
              href={`https://github.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}`}
              target="_blank"
              aria-label="View the source on GitHub"
            >
              <GithubIcon />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
