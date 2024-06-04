"use client";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { BiPen } from "react-icons/bi";
import { IoMdCreate } from "react-icons/io";
// import Video from 'next-video';
export default function Home() {
  const { user, error, isLoading } = useUser();
  return (
    <section className="w-full flex flex-col">
      {user ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="mt-4 text-4xl font-bold text-center text-indigo-600">
            Hi, {user?.nickname || user?.name || "dear user"}!
          </h1>
          <h2 className="text-xl max-w-lg text-center text-gray-600">
            Welcome to Bloggify, where you can easily create full blog posts
            with just one click!
          </h2>
          <Link
            href="/new"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition-all
              cursor-pointer"
          >
            Get Started
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          
          <Link 
            href={"/"}
            className="flex mt-3 text-2xl font-bold text-center text-indigo-600 flex-row justify-center  items-center gap-1"
          >
            {/* <IoMdCreate className="mt-0.5" /> */}
            
            Where Technology meets Creator
            <IoMdCreate className="mt-0.5" />
          </Link>

          <Image
            className="rounded-xl shadow-2xl"
            src="https://i.ibb.co/QfMqMr3/a.png"
            alt="Logo"
            width={80}
            height={80}
          />

          <h2 className="text-xl max-w-lg text-center text-gray-600">
            Discover our upcoming AI-generated blog filled with inspiring
            content.
          </h2>
          <iframe
            className="rounded-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3Lk3NBXSrHA?si=ijexu93638VUfXsP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <a
            href="/api/auth/login"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition-all
                  cursor-pointer"
          >
            Login to get started
          </a>
        </div>
      )}
    </section>
  );
}
