import Button from "../Button";
import Clock from "./Clock/clock";
import style from "./timer.module.scss"

export default function Timer() {
    return (
        <div className={style.timer}>
            <p className={style.title}>Pick a card and start the timer</p>
            <div className={style.timerWrapper}>
                <Clock/>
            </div>
            <Button>
                Start Timer
            </Button>
        </div>

    )
}