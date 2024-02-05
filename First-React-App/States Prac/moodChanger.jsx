// useState is a React hook
import { useState } from "react";

// save in MoodChanger.jsx
function MoodChanger() {
// two variables :
// mood stores current mood, default happy
// setMood is a function for updating mood
const [mood, setMood] = useState('happy');

const handleWinning = () => {
    setMood('Very Happy');
};

 const handleWinLotto = () => {
    setMood('ecstatic')
    }

return (
<div className="MoodChanger componentBox">
    <h2>
Current Mood: {mood} 
</h2>

<button
onClick={() => setMood('tired')}>
Stay Up Late
</button>


<button
onClick={() => setMood('hungry')}>
Skip Lunch
</button>
<button onClick={handleWinning}>Win</button>


<button onClick={handleWinLotto}>Win Lotto</button>


</div>
)
}

export default MoodChanger;