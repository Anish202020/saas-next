"use client";
import { profileAtom } from "@/atoms/profileAtom";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";
// import  {useEffect} from "react";
import { BiCoin, BiLogOut, BiPen } from "react-icons/bi";
import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { getProfile } from "@/lib/functions";
import { refetchCreditsAtom } from "@/atoms/flagAtom";

export default function Navbar() {
  const { user } = useUser();
  const [profile, setProfile] = useRecoilState(profileAtom);
  const refetchCredits = useRecoilValue(refetchCreditsAtom);
  useEffect(() => {
    async function fetchProfile() {
      const profile = await getProfile();
      console.log(profile);
      setProfile(profile)
    }      
    if(user) fetchProfile();
  },[setProfile, user, refetchCredits]);
  return (
    <nav className="w-full bg-white shadow-md px-6 py-2 z-20 grid grid-cols-3">
      {user ? (
        <div className="flex justify-start">
          <div className="flex flex-col md:flex-row justify-start items-center md:gap-4">
            <div className="flex items-center gap-1">
              <BiCoin /> <span className="hidden md:block">Credits:</span>{" "}
              {profile.credits}
            </div>
            <Link
              href="/profile"
              className="text-xs md:text-xl font-bold text-gray-600 hover:text-blue-600"
            >
              BUY MORE
            </Link>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <Link
        href={"/"}
        className="flex flex-row justify-center font-medium text-xl items-center gap-1"
      >
        {user ? (
          <div>Welcome</div>
        ) : (
          <div>
            
            AI-Bloggy
          </div>
        )}
      </Link>

      {user ? (
        <div className="flex flex-row justify-end items-center gap-2">
          <Image
            className="rounded-full hidden sm:block"
            src={user?.picture || ""}
            alt={user?.name || ""}
            width={24}
            height={24}
          />
          <span className="font-semibold text-gray-600 md:hidden">Hi!</span>
          <span className="hidden md:block font-semibold text-gray-600">
            Hi, {user?.name}!
          </span>
          <a
            href="/api/auth/logout"
            className="font-semibold text-gray-600 text-xl cursor-pointer hover:text-blue-600"
          >
            <BiLogOut />
          </a>
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
}
