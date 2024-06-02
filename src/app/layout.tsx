import Navbar from "@/components/nav/Navbar";
import "./globals.css";
export const metadata = {
  title: "Blog Saas",
  description:
    "NextJS template with TypeScript, TailwindCSS, and MongoDB, created by @clipper.",
};
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Sidebar from "@/components/nav/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className="bg-gray-50">
          <Navbar/>
          <Sidebar/>
          {children}</body>
      </UserProvider>
    </html>
  );
}
