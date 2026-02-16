"use client";
import { useRouter } from "next/navigation";
import { useState } from 'react';

function Ques1(){
    const [isClicked, setIsClicked] = useState(false);
    const router = useRouter();

    function handleClick(){ 
        setIsClicked(true);
    }

    return (
        <>
        <div>
            <h4>Question 1</h4>
            <h1>
                JavaScript is a _______ language.
            </h1>
            <div>
                <button onClick={()=>handleClick }>
                    Static Typed Programming
                </button>
                <button>
                    Dynamic Typed Programming
                </button>
                <button>
                    Both of the above
                </button>
                <button>
                    None of the above
                </button>
            </div>
            <div>
                <button disabled>
                    Prev Question
                </button>
                <button onClick={()=>router.push('flashcards/ques2')}>
                    Next Question
                </button>
            </div>
        </div>

        </>
    );
}

export default Ques1;