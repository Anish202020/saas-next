'use client';
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
export default function Home() {
  const {user,error,isLoading} = useUser();
  return (
    <main>
      <h2>Hello</h2>
      <p>The user {user?.name}</p>
      <Link href={"/api/auth/login"}>Login</Link>
    </main>
  )
}
