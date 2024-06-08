"use client";
import PostSkeleton from "@/components/skeletons/PostSkeleton";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { useState } from "react";

export default withPageAuthRequired(function Page() {
  const [loadingPosts, setLoadingPosts]= useState(true);
  return (
    <section className="w-full picture flex flex-col items-center">
      <section className="w-[95%] max-w-4xl flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-4 text-blue-600">Your posts</h1>
        <div className="w-full flex flex-col gap-8 mt-4 items-center">
        {loadingPosts && (
            <>
              <PostSkeleton />
              <PostSkeleton />
              {/* <PostSkeleton /> */}
            </>
          )}
        </div>
      </section>
    </section>
  );
});
