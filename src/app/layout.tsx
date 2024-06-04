"use client";
import Navbar from "@/components/nav/Navbar";
import "./globals.css";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import Sidebar from "@/components/nav/Sidebar";
import { RecoilRoot } from "recoil";
// export const metadata = {
//   title: "AI-Bloggy",
//   description:
//     "NextJS template with TypeScript, TailwindCSS, and MongoDB, created by @clipper.",
// };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
      <head>
          <title>AI-Bloggy</title>
        </head>
        <RecoilRoot>
        <body className="w-full h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="w-full h-full flex flex-col md:flex-row">
            <Sidebar />
            <div className="w-full overflow-auto md:pr-32">{children}</div>
          </main>
        </body>
        </RecoilRoot>
      </UserProvider>
    </html>
  );
}
