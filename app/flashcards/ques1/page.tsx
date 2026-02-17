"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useColorTheme from "../useColorTheme";
import { useScore } from "../../useScore";

function Ques1() {
    const [ redLight, greenLight, choices, mainDiv, parentDiv, moveBtn, quesNumClass, quesClass, resultDiv ] = useColorTheme();
  const [isClicked, setIsClicked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { score, setScore } = useScore();
  const router = useRouter();
  

  return (
    <>
      <div className={mainDiv}>
        <div className={parentDiv}>
          <h4 className={quesNumClass}>
            Question 1
          </h4>
          <h1 className={quesClass}>
            JavaScript is a _______ language.
        </h1>
          <div className="grid grid-cols-2 gap-3 p-3">
            <button
              className={isClicked ? redLight : choices}
              onClick={() => {
                setIsCorrect(false);
                setIsClicked(true);
              }}
            >
              Static Typed Programming
            </button>
            <button
              className={isClicked ? greenLight : choices}
              onClick={() => {
                setIsCorrect(true);
                setIsClicked(true);
                setScore(score + 1);
              }}
            >
              Dynamic Typed Programming
            </button>
            <button
              className={isClicked ? redLight : choices}
              onClick={() => {
                setIsCorrect(false);
                setIsClicked(true);
              }}
            >
              Both of the above
            </button>
            <button
              className={isClicked ? redLight : choices}
              onClick={() => {
                setIsCorrect(false);
                setIsClicked(true);
              }}
            >
              None of the above
            </button>
          </div>
          <div className={isClicked? resultDiv : "hidden"}>
            <p className={(isClicked && isCorrect)? "": "hidden"}>
              Congrats 🎉🎉<br /> Your Anwer is Correct
            </p>
            <p className={(isClicked && isCorrect)? "hidden": ""}>
              Oops... Worng Answer
            </p>
          </div>
          <div className={isClicked? 'flex my-6 justify-around': 'hidden'}>
            <button
             className={moveBtn}
             onClick={() => router.push("./ques2")}
            >
              Next Question
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ques1;
