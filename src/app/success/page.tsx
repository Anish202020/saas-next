"use client";
import { refetchCreditsAtom } from "@/atoms/flagAtom";
import { profileAtom } from "@/atoms/profileAtom";
import { addCredits } from "@/lib/functions";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";

export default withPageAuthRequired(function Page() {

  return (
    <section className="w-full flex flex-col items-center">
      <section className="w-[95%] max-w-4xl flex flex-col items-center gap-4">
        <h1 className="text-4xl flex flex-col justify-center  font-bold text-center mt-4 text-blue-600">
          Thank you for your purchase!
            <Image width={500} alt="" height={500} priority src="https://i.ibb.co/q9ntfDD/success-removebg-preview.png"/>
            
        </h1>
      </section>
    </section>
  );
});

