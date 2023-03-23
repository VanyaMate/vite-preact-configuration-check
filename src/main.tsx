import {createContext, render} from 'preact'
import {StateUpdater, useState} from "preact/hooks";
import SecondsShower from "./SecondsShower";

export interface ITimeContext {
    timer: {
        seconds: number,
        setSeconds: StateUpdater<number>
    }
}

export const TimeContext = createContext<ITimeContext>({} as ITimeContext);

const App = function () {
    const [time, setTime] = useState(0);

    return (
        <TimeContext.Provider value={{ timer: { seconds: time, setSeconds: setTime }}}>
            <h1 onClick={() => setTime((p) => p + 1)}>Timer { time }</h1>
            <SecondsShower/>
        </TimeContext.Provider>
    );
}

render(
    <App/>
, document.getElementById('app') as HTMLElement)
