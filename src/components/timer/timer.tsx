import Button from "../Button";
import Clock from "./Clock/clock";
import style from "./timer.module.scss"
import {ITask} from "../../types/task";
import {useEffect, useState} from "react";
import {timeToSeconds} from "../../utils/date";

interface Props {
    activeTask: ITask | undefined;
}

export default function Timer({ activeTask }: Props) {
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        if(activeTask?.time) {
            setTime(timeToSeconds(activeTask.time));
        }
    }, [activeTask]);

    return (
        <div className={style.timer}>
            <p className={style.title}>Pick a card and start the timer</p>
            <div className={style.timerWrapper}>
                <Clock time={time}/>
            </div>
            <Button>
                Start Timer
            </Button>
        </div>

    )
}