import {TimeContext} from "./main";

const SecondsShower = () => {
    return (
        <TimeContext.Consumer>
            {
                (timerContext) => {
                    return <div>
                        Shower { timerContext.timer.seconds }
                        <button onClick={() => timerContext.timer.setSeconds((prev) => prev + 1)}>+</button>
                        <button onClick={() => timerContext.timer.setSeconds((prev) => prev - 1)}>-</button>
                    </div>
                }
            }
        </TimeContext.Consumer>
    );
};

export default SecondsShower;