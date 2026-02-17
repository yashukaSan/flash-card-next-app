"use client";

import { useRouter } from "next/navigation";

function FlashCardPage() {
    const router = useRouter();
    return (
        <div className="bg-white text-xl grid gap-4 text-black border w-[90vw] m-auto text-center
        p-3">

            <h2 className="text-2xl font-bold underline">
                Here are the basic information about the JavaScript
            </h2>
            <div className="border grid bg-green-200 justify-center p-3">
                <div className=" bg-red-300 rounded-xl"> 
                <h1 className="p-3 text-4xl font-bold py-3">
                    Introduction
                </h1>
                <p className="p-3">
                    JavaScript is a versatile, dynamically typed programming language that brings life to web pages by making them interactive. It is used for building interactive web applications, supports both client-side and server-side development, and integrates seamlessly with HTML, CSS, and a rich standard library.
                </p>
                <hr />
                <ul className="text-left list-disc list-inside p-3">
                    <li>
                        JavaScript is a single-threaded language that executes one task at a time.
                    </li>
                    <li>
                        It is an interpreted language which means it executes the code line by line.
                    </li>
                    <li>
                        The data type of the variable is decided at run-time in JavaScript, which is why it is called dynamically typed.
                    </li>
                </ul>
                </div>
                <hr className="my-5" />
                <div className="bg-blue-300 rounded-xl p-3">
                    <h2 className="text-3xl font-bold">
                        Features of JavaScript
                    </h2>
                    <ul className="list-inside list-disc text-left">
                        <li>
                            Client-Side Scripting: JavaScript runs on the user&apos;s browser, so has a faster response time without needing to communicate with the server.
                        </li>
                        <li>Versatile: Can be used for a wide range of tasks, from simple calculations to complex server-side applications.
                        </li>
                        <li>Event-Driven: Responds to user actions (clicks, keystrokes) in real-time.
                        </li>
                        <li>Asynchronous: It can handle tasks like fetching data from servers without freezing the user interface.
                        </li>
                        <li>Rich Ecosystem: There are numerous libraries and frameworks built on JavaScript, such as React, Angular, and Vue.js, which make development faster and more efficient.
                        </li>
                    </ul>
                </div>
                <hr className="my-5" />
                <div className="bg-yellow-200 rounded-xl p-3">
                    <h1 className="font-bold text-3xl">
                        Limitations of JavaScript
                    </h1>
                    <ul className="list-disc list-inside text-left">
                        <li>
                            Security Risks : Can be used for attacks like Cross-Site Scripting (XSS), where malicious scripts are injected into a website to steal data by exploiting elements like &lt;img&gt;, &lt;object&gt;, or &lt;script&gt; tags.
                        </li>
                        <li>Performance : Slower than traditional languages for complex tasks, but for simple tasks in a browser, performance is usually not a major issue.
                        </li>
                        <li>Complexity : To write advanced JavaScript, programmers need to understand core programming concepts, objects, and both client- and server-side scripting, which can be challenging.
                        </li>
                        <li>Weak Error Handling and Type Checking : Weakly typed, meaning variables don’t require explicit types. This can lead to issues as type checking is not strictly enforced.
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <button
                 onClick={()=>router.push('flashcards/ques1')} 
                 className="bg-green-500 w-[50vw] hover:bg-green-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer">
                    START
                </button>
            </div>

        </div>
    )
}

export default FlashCardPage;