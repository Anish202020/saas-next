import "./globals.css";
export const metadata = {
  title: "Blog Saas",
  description:
    "NextJS template with TypeScript, TailwindCSS, and MongoDB, created by @clipper.",
};
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}
