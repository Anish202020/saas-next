"use client";
import { profileAtom } from "@/atoms/profileAtom";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineCreditScore } from "react-icons/md";

export default withPageAuthRequired(function Page() {
  const [profile ,setProfile] = useRecoilState(profileAtom)
  const { user } = useUser();
  function handleAddCredits(){
    setProfile((profile)=>({...profile,credits : profile.credits +5}))
  }
  
  return (
    <section className="w-full picture flex flex-col items-center">
    <section className="w-[95%] max-w-4xl flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold text-center mt-4 text-blue-600">
        Your Profile
      </h1>
      <Image
            className="rounded-xl shadow-2xl"
            src={user?.picture || ""}
            alt={user?.name || ""}
            width={80}
            height={80}
          />
          <h1 className="hidden text-lg md:block font-semibold text-gray-600">Hi, {user?.name || "dear user"}</h1>

          

      <h2 className="text-2xl font-bold text-center text-gray-800">
        You have {profile.credits} credits.
      </h2>
      <button
        className="bg-blue-600 flex gap-1 justify-center text-white px-4 py-2 rounded-md font-bold text-xl"
        onClick={handleAddCredits}
      >
        <MdOutlineCreditScore className="mt-1.5"/> Buy more credits
      </button>

      <a
            href="/contribution"
            className="font-semibold text-gray-600 text-xl cursor-pointer hover:text-blue-600"
          >
            Contribution
          </a>
      <a
            href="/api/auth/logout"
            className="font-semibold text-gray-600 text-xl cursor-pointer hover:text-blue-600"
          >
            Logout
          </a>
    </section>
  </section>
  );
});
