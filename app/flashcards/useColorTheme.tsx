function useColorTheme(){
    const redLight = " p-5 rounded-3xl text-center bg-red-500";
    const greenLight = " p-5 rounded-3xl text-center bg-green-400";
    const choices = "p-5 dark:bg-black rounded-3xl text-center";
    const mainDiv = "grid items-center justify-center dark:bg-[#101010] bg-blue-400 h-screen";
    const parentDiv = "border-20 p-3 sm:p-14 lg:p-24 bg-[#e0e0e0] dark:bg-[#303030] text-sm lg:text-3xl lg:w-[80vw] lg:h-[75vh] rounded-tl-[30%] rounded-br-[30%] mx-1";
    const moveBtn = " p-4 rounded-4xl dark:bg-blue-300 bg-orange-400 text-black font-bold font-mono"
    const quesNumClass = "sm:text-5xl text-center dark:text-[#f0f0f0] text-blue-800";
    const quesClass = "text-center m-5 sm:text-3xl font-mono text-slate-800 dark:text-zinc-300";
    const resultDiv = "mt-4 p-3 rounded-2xl text-center text-xl dark:bg-black bg-white text-black dark:text-white";

    return [redLight, greenLight, choices, mainDiv, parentDiv, moveBtn, quesNumClass, quesClass, resultDiv];
}

export default useColorTheme;