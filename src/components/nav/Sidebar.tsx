"use client";
import { menu } from "@/data/menu";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

export default function Sidebar() {
  const { user } = useUser();
  return user ? (
    <div
      className="bg-white border border-gray-100 py-2 flex flex-shrink-0 flex-row justify-around md:justify-start md:flex-col md:h-full md:w-32 z-10
    and the other one
    "
    >
      {menu.map((item,index)=>(
        <div key={index}>{item.text}</div>
      ))}
    </div>
  ) : (
    <div></div>
  );
}
