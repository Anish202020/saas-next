"use client";
import Image from "next/image";
import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

export default withPageAuthRequired( function Page() {
  return (
    <section className="w-full  flex  flex-col items-center">
      <div className="w-[95%] max-w-4xl  px-5 py-4">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-bold text-center text-blue-600">
            Our Team
          </h1>
          <p className="lg:w-2/3 font-semibold mx-auto leading-relaxed text-gray-70000 text-base">
            Together, our diverse skills and unity can conquer any challenge. We
            have collaborate, support, and achieve greatness in our project!
          </p>
        </div>
      </div>
      <div>
        <div className="flex gap-6 flex-wrap items-center flex-row">
          <div className="text-center">
            <Image
              width={100}
              height={100}
              alt="team"
              className="flex-shrink-0 rounded-lg object-cover object-center mb-4"
              src="https://i.ibb.co/xFKSFr4/anish.jpg"
            />
            <div>
              <p className=" text-center font-bold mx-auto leading-relaxed text-blue-700 text-base">
                Name - Anish Kumar
              </p>
              <p className=" text-center font-bold mx-auto leading-relaxed text-blue-700 text-base">
                Usn - 1AY21CS028
              </p>
              <p className=" text-center font-bold mx-auto leading-relaxed text-blue-700 text-base">
                Contribution - Development
              </p>
            </div>
          </div>
          <div>
            <Image
              width={100}
              height={100}
              alt="team"
              className="flex-shrink-0 rounded-lg object-cover object-center mb-4"
              src="https://i.ibb.co/xFKSFr4/anish.jpg"
            />
            <div>
              <p className=" text-center font-bold mx-auto leading-relaxed text-blue-700 text-base">
                Name - Anish Kumar
              </p>
              <p className=" text-center font-bold mx-auto leading-relaxed text-blue-700 text-base">
                Usn - 1AY21CS028
              </p>
              <p className=" text-center font-bold mx-auto leading-relaxed text-blue-700 text-base">
                Contribution - Development
              </p>
            </div>
          </div>
          <div>
            <Image
              width={100}
              height={100}
              alt="team"
              className="flex-shrink-0 rounded-lg object-cover object-center mb-4"
              src="https://i.ibb.co/xFKSFr4/anish.jpg"
            />
            <div>
              <p className=" text-center font-bold mx-auto leading-relaxed text-blue-700 text-base">
                Name - Anish Kumar
              </p>
              <p className=" text-center font-bold mx-auto leading-relaxed text-blue-700 text-base">
                Usn - 1AY21CS028
              </p>
              <p className=" text-center font-bold mx-auto leading-relaxed text-blue-700 text-base">
                Contribution - Development
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
})
