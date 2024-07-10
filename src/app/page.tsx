"use client";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { FaPenFancy, FaHandshake } from "react-icons/fa";


export default function Home() {
  const { user, error, isLoading } = useUser();
  return (
    <section className="w-full flex flex-col">
      {user ? (
        <div className="flex flex-col items-center picture justify-center gap-4">
          <div className="flex gap-4 justify-center">
            <Image
              className="rounded-xl shadow-2xl"
              src={user?.picture || ""}
              alt={user?.name || ""}
              width={80}
              height={80}
            />
            <FaHandshake className="text-4xl mt-6 rounded-xl shadow-2xl" />
            <Image
              className="rounded-xl shadow-2xl"
              src="https://i.ibb.co/QfMqMr3/a.png"
              alt="Logo"
              width={80}
              height={80}
            />
          </div>
          <h1 className="mt-4 text-4xl font-bold text-center text-blue-600">
            Hi, {user?.name || user?.nickname || "dear user"}!
          </h1>
          <h2 className="text-xl max-w-lg text-center text-gray-600">
            Welcome to AI-Bloggy, where you can easily create full blog posts
            with just one click!
            <div className="flex justify-center mt-1">

            <Image className="rounded-xl shadow-2xl" src="https://i.ibb.co/89c6rJc/free-credits.png" alt="free-credits" width={250} height={250}/>
            </div>
          </h2>
          <Link
            href="/new"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-all
              cursor-pointer font-bold"
          >
            Get Started
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center picture  justify-center gap-4">
          <Link
            href={"/"}
            className="flex mt-3 text-2xl font-bold text-center text-blue-600 flex-row justify-center  items-center gap-1"
          >
            Where Technology meets Creator
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
          <div className="sm:w-2/3 lg:w-1/2   h-96 mb-4 lg:mb-0 rounded-lg overflow-hidden">

          <iframe
            className="rounded-lg h-full w-full mb-1 object-cover object-center "
            // width={500}
            // height={350}
            src="https://www.youtube.com/embed/3Lk3NBXSrHA?si=ijexu93638VUfXsP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            ></iframe>
            </div>
          <a
            href="/api/auth/login"
            className="bg-blue-600 text-white px-4 py-2 mb-2 rounded-md hover:bg-blue-500 transition-all font-bold
                  cursor-pointer"
          >
            Login to get started
          </a>
        </div>
      )}
    </section>
  );
}
