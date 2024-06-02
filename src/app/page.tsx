"use client";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
export default function Home() {
  const { user, error, isLoading } = useUser();
  return (
    <main>
      <h2>Hello</h2>
      <p>The user {user?.name}</p>
      {user && <p>The user {user?.name} is logged in.</p>}

      {user ? (
        <a href={"/api/auth/logout"}>Logout</a>
      ) : (
        <a href={"/api/auth/login"}>Login</a>
      )}
      <div>
        <Link href={"/profile"}>User</Link>
      </div>
    </main>
  );
}
