"use client";
import Image from "next/image";
import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

export default withPageAuthRequired(function Page() {
  return (
    <div>
      <div className="text-gray-600 picture body-font">
        <div className="container px-5 py-1 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-600">Our Team</h1> */}
            <h1 className="text-4xl font-bold mt-4 text-blue-600">Our Team</h1>
            <p className="lg:w-2/3 mx-auto py-10 leading-relaxed text-base">
              Together, our diverse skills and unity can conquer any challenge.
              We have collaborate, support, and achieve greatness in our
              project!
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
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
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
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
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
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
          </div>
        </div>
      </div>
    </div>
  );
});
