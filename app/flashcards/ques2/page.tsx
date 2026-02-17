"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useColorTheme from "../useColorTheme";
import { useScore } from "../../useScore";

function Ques2() {
  const [
    redLight,
    greenLight,
    choices,
    mainDiv,
    parentDiv,
    moveBtn,
    quesNumClass,
    quesClass,
    resultDiv
  ] = useColorTheme();
  const [isClicked, setIsClicked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { score, setScore } = useScore();
  const router = useRouter();

  return (
    <>
      <div className={mainDiv}>
        <div className={parentDiv}>
          <h4 className={quesNumClass}>Question 2</h4>
          <h1 className={quesClass}>
            Which is not a JavaScript Feature
          </h1>
          <div className="grid grid-cols-2 gap-3 p-3">
            <button
              className={isClicked ? redLight : choices}
              onClick={() => {
                setIsCorrect(false);
                setIsClicked(true);
              }}
            >
              Client-side Scripting
            </button>
            <button
              className={isClicked ? redLight : choices}
              onClick={() => {
                setIsCorrect(false); 
                setIsClicked(true);
              }}
            >
              Versatile
            </button>
            <button
              className={isClicked ? greenLight : choices}
              onClick={() => {
                setIsCorrect(true);
                setScore(score + 1);
                setIsClicked(true);
              }}
            >
              Poor Ecosystem
            </button>
            <button
              className={isClicked ? redLight : choices}
              onClick={() => {
                setIsCorrect(false);
                setIsClicked(true);
              }}
            >
              Event-Driven
            </button>
          </div>
          <div className={isClicked ? resultDiv : "hidden"}>
            <p className={isClicked && isCorrect ? "" : "hidden"}>
              Congrats 🎉🎉
              <br /> Your Anwer is Correct
            </p>
            <p className={isClicked && isCorrect ? "hidden" : ""}>
              Oops... Worng Answer
            </p>
          </div>
          <div
            className={isClicked ? "flex my-6 justify-around" : "hidden"}
          >
            <button className={moveBtn} onClick={() => router.push("./ques3")}>
              Next Question
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ques2;
