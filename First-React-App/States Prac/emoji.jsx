// useState is a React hook
import { useState } from "react";


function EmojiChanger() {


const [mood, setMood] = useState('😐');

const handleSadEmoji = () => {
    let newEmoji = ""
}

return (

<div className="MoodChanger componentBox">
    <h2>
Current Mood: {mood} 
</h2>

<button
onClick={() => setMood('😀')}>
Make Emoji Happy
</button>

<button
onClick={() => setMood('😔')}>
Make Emoji Sad
</button>

</div>
)}

export default EmojiChanger