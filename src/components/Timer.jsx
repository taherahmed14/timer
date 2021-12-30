import { useEffect, useState } from "react/cjs/react.development";

export const Timer = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setCounter((prev) => {
                if(prev === 20){
                    clearInterval(id);
                    return "Go get a life, nothing is going to happen.";
                }
                return prev + 1;
            });
        }, 1000);
    }, []);

    return (<div>
                <h3> Countdown begins!! Something exciting is about to happen. Watch the below space at 20</h3>
                <h1>{counter}</h1>
            </div>)
};