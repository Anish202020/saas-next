"use client"
import React from 'react'
import { FaCopy } from "react-icons/fa";
import { TiDocumentDelete } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";

interface Props {
  post: PostWithId;
  handleDeletePost: (_id: string) => void;
}
export default function Post({post,handleDeletePost}:Props) {
    function handleCopyToClipboard() {
        navigator.clipboard.writeText(post.title + "\n" + post.content);
      }
      function handleDelete() {
        handleDeletePost(post._id);
      }
  return (
    <div className='w-full flex flex-col gap-4 shadow-sm p-4 rounded-xl bg-white'>
      <h1 className="text-2xl px-4 font-bold text-center text-gray-800">
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
      <button
        className="bg-blue-600 flex gap-2 justify-center text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-all
                cursor-pointer"
        onClick={handleCopyToClipboard}
      >
        <FaCopy className='mt-1'/>Copy the Post
      </button>
      <button
        className="bg-red-600 flex gap-1 justify-center text-white px-4 py-2 rounded-md hover:bg-red-500 transition-all
                cursor-pointer"
        onClick={handleDelete}
      >
        <MdDeleteForever className='text-xl mt-0.5'/>Delete the Post
      </button>
    </div>
  )
}
