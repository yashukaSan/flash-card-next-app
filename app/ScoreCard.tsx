import { useState } from 'react';

function ScoreCard(val:boolean){
    const [currScore, setCurrScore] = useState(0);
    val? setCurrScore(prev => prev +1) : setCurrScore(currScore);
    return (
        <>
        <div>
            <p>Score: </p><span>{currScore}</span>
        </div>
        </>
    );
}

export default ScoreCard;