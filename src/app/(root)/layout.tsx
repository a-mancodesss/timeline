import type { Metadata } from "next";
import "../globals.css";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import TopBar from "@/components/shared/TopBar";
import BottomBar from "@/components/shared/BottomBar";
import LeftSideBar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSideBar";

export const metadata: Metadata = {
  title: "TimeLine",
  description: "Root home page of TimeLine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`antialiased`}>
          <TopBar/>
          <main className="flex">
            <LeftSideBar/>
            <section className="main-container w-full max-w-4xl m-auto">
              {children}
            </section>
            <RightSideBar/>
          </main>
          <BottomBar/>
        </body>
      </html>
    </ClerkProvider>
  );
}
