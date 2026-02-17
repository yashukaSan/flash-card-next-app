"use client"
import {useScore} from '../../useScore'
import { useRouter } from 'next/navigation';


export default function Results(){
    const { score, setScore } = useScore();
    const router = useRouter();
    return (
      <>
        <div className="grid border h-screen p-20 dark:bg-purple-900 bg-green-300">
          <h1 className="border flex p-8 m-auto w-[60vw] justify-center text-2xl rounded-3xl dark:text-blue-100 dark:bg-blue-700 bg-blue-300 text-black">
            You Score: {score}/10
          </h1>
          <button
            onClick={() => {
              router.push("/flashcards/ques1");
              setScore(0);
            }}
            className="border p-5 m-auto rounded-full sm:w-70 mt-6 sm:h-30 dark:bg-black bg-orange-300 text-red-700 font-bold text-2xl"
          >
            Take Test again
          </button>
          <button
            onClick={() => {
              router.push("/");
              setScore(0)
            }}
            className="border p-5 m-auto rounded-full sm:w-50 sm:h-30 bg-orange-300 dark:bg-black text-red-700 font-bold text-2xl"
          >
            Back To Home
          </button>
        </div>
      </>
    );
}