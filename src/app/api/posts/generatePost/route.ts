import { NextRequest, NextResponse } from "next/server";
import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import OpenAI from "openai";

const withApiAuthRequiredExtended = withApiAuthRequired as any;

export const POST = withApiAuthRequiredExtended(async (request: NextRequest, response: NextResponse) => {
    //const { db } = await connectToDatabase();
    try {
      //const test = await db.collection("test").find({}).toArray();
      return NextResponse.json({ message: "Hello World" }, { status: 200 });
    } catch (error) {
      return NextResponse.error();
    }
  })