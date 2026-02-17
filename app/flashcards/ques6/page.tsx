"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useColorTheme from "../useColorTheme";

function Ques1() {
  const [
    redLight,
    greenLight,
    choices,
    mainDiv,
    parentDiv,
    moveBtn,
    quesNumClass,
    quesClass,
  ] = useColorTheme();
  const [isClicked, setIsClicked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const router = useRouter();

  function handleClick() {
    setIsClicked(true);
  }

  return (
    <>
      <div className={mainDiv}>
        <div className={parentDiv}>
          <h4 className={quesNumClass}>Question 6</h4>
          <h1 className={quesClass}>JavaScript is a _______ language.</h1>
          <div className="border grid grid-cols-2 gap-3 p-3">
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
          <div
            className={isClicked ? "flex my-6 justify-around border" : "hidden"}
          >
            <button
              className={moveBtn}
              onClick={() => router.push("./ques7")}
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
