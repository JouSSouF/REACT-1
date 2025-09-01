import { useState } from "react";   
function Home() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1><b>This is the Home page</b></h1>
            <h1>Counter: {count} $ </h1>
            <button onClick={() => {setCount(count + 1)}}>Incremental Cash</button>
            <button onClick={() => {setCount(count - 1)}}>Decremental Cash</button>
        </div>
    );
};
export default Home;