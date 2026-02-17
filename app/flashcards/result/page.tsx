"use client"
import {useScore} from '../../useScore'
import { useRouter } from 'next/navigation';

export default function Results(){
    const { score, }:any = useScore();
    const router = useRouter();
    return (
      <>
        <div className="grid border h-screen p-20 bg-green-300">
          <h1 className="border flex p-8 m-auto w-[60vw] justify-center text-2xl rounded-3xl bg-blue-300 text-black">
            You Score: {score}/10
          </h1>
          <button
            onClick={() => router.push("/flashcards/ques1")}
            className="border p-5 m-auto rounded-full sm:w-70 mt-6 sm:h-30 bg-orange-300 text-red-700 font-bold text-2xl"
          >
            Take Test again
          </button>
          <button
            onClick={() => router.push("/")}
            className="border p-5 m-auto rounded-full sm:w-50 sm:h-30 bg-orange-300 text-red-700 font-bold text-2xl"
          >
            Back To Home
          </button>
        </div>
      </>
    );
}