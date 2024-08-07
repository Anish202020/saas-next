"use client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { useState } from "react";
import { tones } from "@/data/tones";
import { generatePost, getProfile } from "@/lib/functions";
import { refetchCreditsAtom } from "@/atoms/flagAtom";
import {FaSpinner,FaRegTired} from "react-icons/fa"
import { useRecoilState } from "recoil";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default withPageAuthRequired(function Page() {
  const [post, setPost] = useState<Post | null>(null);
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [refetchCredits, setRefetchCredits] = useRecoilState(refetchCreditsAtom);
  const [postPrompt, setPostPrompt] = useState<PostPrompt>({
    title: "",
    description: "",
    domain:"",
    keywords: "",
    tone: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //reset all the flags
    setHasSubmitted(true);
    setError(false);
    setSuccess(false);
    setIsWaitingForResponse(true);
    //send the request
    const profile = await getProfile();
    if(profile.credits===0){
      toast.error("No Token, Buy Them!", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
      });
    }
    const res = await generatePost(postPrompt);    
    setRefetchCredits((prev) => !prev);
    await res
      .json()
      .then((data) => {
        setIsWaitingForResponse(false);
        setHasSubmitted(false);
        setSuccess(true);
        setPost(data.post);
      })
      .catch((err) => {
        setIsWaitingForResponse(false);
        setHasSubmitted(false);
        setError(true);
      });
  }
  return (
    <section className="w-full picture flex flex-col items-center">
      <section className="w-[95%] max-w-4xl">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4 mt-4 items-center"
        >
          <h1 className="text-4xl font-bold text-center text-blue-600">
            Generate a new post
          </h1>

          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="title"
              className="text-gray-600 text-sm font-semibold"
            >
              Title <sup>*Required</sup>
            </label>
            <input
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="text"
              name="title"
              id="title"
              required
              placeholder="Enter a title (e.g. 'How to make a blog post')"
              value={postPrompt.title}
              onChange={(e) =>
                setPostPrompt({ ...postPrompt, title: e.target.value })
              }
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-gray-600 text-sm font-semibold"
            >
              Description <sup>*Required</sup>
            </label>
            <textarea
              name="description"
              id="description"
              required
              placeholder="Enter a description (e.g. 'This is a blog post about how to write proper blog posts that are easy to read and understand.')"
              value={postPrompt.description}
              onChange={(e) =>
                setPostPrompt({ ...postPrompt, description: e.target.value })
              }
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
              {/* Domain */}
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="domain"
              className="text-gray-600 text-sm font-semibold"
            >
              Domain <sup>*Required</sup>
            </label>
            <input
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="text"
              name="domain"
              id="domain"
              required
              placeholder="Enter a Domain (e.g. 'For Police or Doctor')"
              value={postPrompt.domain}
              onChange={(e) =>
                setPostPrompt({ ...postPrompt, domain: e.target.value })
              }
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="keywords"
              className="text-gray-600 text-sm font-semibold"
            >
              Keywords <sup>*Required</sup>
            </label>
            <input
              type="text"
              name="keywords"
              id="keywords"
              required
              placeholder="Enter keywords, separated by commas (e.g. 'blog, post, writing')"
              value={postPrompt.keywords}
              onChange={(e) =>
                setPostPrompt({ ...postPrompt, keywords: e.target.value })
              }
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="tone"
              className="text-gray-600 text-sm font-semibold"
            >
              Tone <sup>*Required</sup>
            </label>
            <select
              name="tone"
              id="tone"
              required
              value={postPrompt.tone}
              onChange={(e) =>
                setPostPrompt({ ...postPrompt, tone: e.target.value })
              }
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {tones.map((tone, index) => (
                <option key={index} value={tone.value}>
                  {tone.label}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 w-fit text-white px-4 py-2 rounded-md mt-4 font-bold hover:bg-blue-500 transition-all
                cursor-pointer"
          >
            Submit
          </button>
        </form>
        {isWaitingForResponse && hasSubmitted && (
          <div className="w-full flex flex-col gap-4 mt-4 items-center">
            <FaSpinner className="animate-spin w-8 h-8 text-indigo-600" />
          </div>
        )}
        {error && (
          <div className="w-full flex flex-col gap-4 mt-4 items-center">
            <FaRegTired className="w-8 h-8 text-rose-600" />
            <p className="text-rose-600 text-center">
              Something went wrong. Please try again.
            </p>
          </div>
        )}
        {success && post && (
          <div className="w-full flex flex-col gap-4 mt-4">
            <h1 className="text-4xl font-bold text-gray-800 text-center">
              {post.title}
            </h1>
            {typeof post.content === "string" ? (
              <p className="text-gray-600">{post.content}</p>
            ) : (
              <div className="flex flex-col gap-2">
                {post.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          // transition: Bounce,
        />
      </section>
    </section>
  );
});