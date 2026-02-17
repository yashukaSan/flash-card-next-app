"use client";

import { useRouter } from "next/navigation";


export default function Home() {
  const  router = useRouter();
  return (
    <>
    <div className="border w-[90vw] m-2 text-center h-[50vh] bg-green-500">
      <h1 className="text-3xl font-bold font-sans text-white p-5">
        WELCOME TO JAVSCRIPT JOURNEY
      </h1>
      <button
       className="rounded-full hover:cursor-pointer p-7 h-30 w-30 textwhite bg-red-700 font-extrabold" 
       onClick={() => router.push("/flashcards")}>
        START
      </button>
    </div>
    </>  );
}
