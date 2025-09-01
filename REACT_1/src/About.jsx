import { useState } from "react";   
function About() {
const [random, setRandom] = useState(0);
return (
<div>
    <h1><b>This is the About Page</b></h1>
    <button onClick={() => {setRandom(Math.round(Math.random() * 100) + 1)}}>
        Test your luck with a random number : {random}
    </button>
</div>
);
};
export default About;