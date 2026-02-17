"use client";

import { useRouter } from "next/navigation";


export default function Home() {
  const  router = useRouter();
  return (
    <>
    <div className="w-[90vw] h-screen m-auto text-center grid item-center  bg-green-500">
      <h1 className="text-3xl font-bold font-sans text-white p-5 mt-35">
        WELCOME TO JAVSCRIPT JOURNEY
      </h1>
      <button
       className="rounded-full lg:w-150 lg:text-4xl hover:cursor-pointer m-auto p-7 h-30 w-30 text-white bg-red-700 font-extrabold" 
       onClick={() => router.push("/flashcards")}>
        START
      </button>
    </div>
    </>  );
}
