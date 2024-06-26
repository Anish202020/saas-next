"use client";
import { profileAtom } from "@/atoms/profileAtom";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useRecoilState } from "recoil";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { MdOutlineCreditScore } from "react-icons/md";
import { addCredits } from "@/lib/functions";
import { refetchCreditsAtom } from "@/atoms/flagAtom";
export default withPageAuthRequired(function Page() {
  const [profile, setProfile] = useRecoilState(profileAtom);
  const { user } = useUser();
  const [refetchCredits, setRefetchCredits] =
    useRecoilState(refetchCreditsAtom);
  function handleAddCredits() {
    async function handler() {
      await addCredits();
      setRefetchCredits((prev) => !prev);
    }
    handler();
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
        <h1 className="hidden text-lg md:block font-semibold text-gray-600">
          Hi, {user?.name || "dear user"}
        </h1>

        <h2 className="text-2xl font-bold text-center text-gray-800">
          You have {profile.credits} credits.
        </h2>
        <button
          className="bg-blue-600 flex gap-1 hover:bg-blue-500 transition-all justify-center text-white px-4 py-2 rounded-md font-bold"
          onClick={handleAddCredits}
        >
          <MdOutlineCreditScore className="mt-1.5" /> Buy more credits
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
