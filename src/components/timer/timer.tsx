import Button from "../Button";
import Clock from "./Clock/clock";
import style from "./timer.module.scss"
import {ITask} from "../../types/task";
import {useEffect, useState} from "react";
import {timeToSeconds} from "../../utils/date";

interface Props {
    activeTask: ITask | undefined;
    endTask: () => void;
}

export default function Timer({ activeTask, endTask }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(activeTask?.time) {
            setTime(timeToSeconds(activeTask.time));
        }
    }, [activeTask]);

    function regressiveTimer(timer: number = 0) {
        setTimeout(() => {
            if(timer > 0) {
                setTime( timer - 1);
                return regressiveTimer(timer - 1);
            }
            endTask();
        }, 1000);

    }

    return (
        <div className={style.timer}>
            <p className={style.title}>Pick a card and start the timer</p>
            <div className={style.timerWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick={ () => regressiveTimer(time)}>
                Start Timer
            </Button>
        </div>

    )
}