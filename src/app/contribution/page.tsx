import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="container px-5 py-4 mx-auto">
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
        <div className="flex gap-6 sm:flex-row">
          <div>
            <Image
              width={100}
              height={100}
              alt="team"
              className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
              src="https://i.ibb.co/xFKSFr4/anish.jpg"
            />
            <div>
              <p className=" text-center font-semibold mx-auto leading-relaxed text-gray-70000 text-base">
                Name - Anish Kumar
              </p>
              <p className=" text-center font-semibold mx-auto leading-relaxed text-gray-70000 text-base">
                Usn - 1AY21CS028
              </p>
              <p className=" text-center font-semibold mx-auto leading-relaxed text-gray-70000 text-base">
                Contribution - Development
              </p>
            </div>
          </div>
          <div>
            <Image
              width={100}
              height={100}
              alt="team"
              className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
              src="https://i.ibb.co/xFKSFr4/anish.jpg"
            />
          </div>
          <div>
            <Image
              width={100}
              height={100}
              alt="team"
              className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
              src="https://i.ibb.co/xFKSFr4/anish.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
