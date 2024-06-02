"use client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default withPageAuthRequired(function Page() {
  return (
    <main>
      <h1>Hello World</h1>
      <p>This is the user</p>
      <div>User</div>
      <div>
        <Link href={"/"}>Go to home</Link>
      </div>
    </main>
  );
});
