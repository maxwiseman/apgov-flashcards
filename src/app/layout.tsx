import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Footer } from "@/components/ui/footer";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            <TRPCReactProvider cookies={cookies().toString()}>
              {children}
            </TRPCReactProvider>
          </main>
          <Separator className="mt-4" />
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
