"use client";
import Image from "next/image";
import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";

export default withPageAuthRequired(function Page() {
  return (
    <div>
      <div className="text-gray-600 picture body-font">
        <div className="container px-5  mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-600">Our Team</h1> */}
            <h1 className="text-4xl font-bold mt-4 text-blue-600">Our Team</h1>
            <p className="lg:w-2/3 mx-auto py-10 text-gray-800 font-semibold leading-relaxed text-base">
              Together, our diverse skills and unity can conquer any challenge.
              We have collaborate, support, and achieve greatness in our
              project!
            </p>
            <div className="flex justify-center">
              <Link
                href={"https://github.com/Anish202020/saas-next/"}
                target="_blank"
                className="bg-blue-600 hover:bg-blue-500 transition-all  flex gap-1 justify-center text-white px-4 py-2 rounded-md font-bold text-xl"
              >
                <IoLogoGithub className="mt-0.5 text-2xl" /> Github - Raw Code
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3  md:w-1/2 w-full">
              <div className="h-full flex bg-gray-50 items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  width={100}
                  height={100}
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://i.ibb.co/TrHySb1/sahu.jpg"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Aditya Jyoti Sahu
                  </h2>
                  <p className="text-gray-500">USN - 1AY21CS017</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex bg-gray-50 items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  width={100}
                  height={100}
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://i.ibb.co/F4czDpt/anish.jpg"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Anish Kumar
                  </h2>
                  <p className="text-gray-500">USN - 1AY21CS028</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex bg-gray-50 items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  width={100}
                  height={100}
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://i.ibb.co/qgq9H93/hruday.jpg"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Dalavai Hruday
                  </h2>
                  <p className="text-gray-500">USN - 1AY21CS049</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex bg-gray-50 items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  width={100}
                  height={100}
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://i.ibb.co/w4RCJpr/ajith-sir.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Ajith Sir
                  </h2>
                  <p className="text-gray-500">HOD - Our Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
