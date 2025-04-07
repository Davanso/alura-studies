import style from './clock.module.scss'

interface Props {
    time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minutesDezena, minutesUnit] = String(minutes).padStart(2, '0');
    const [secondsDezena, secondsUnit] = String(seconds).padStart(2, '0');

    return (
        <>
            <span className={style.clockNumber}>{minutesDezena}</span>
            <span className={style.clockNumber}>{minutesUnit}</span>
            <span className={style.ClockDivider}>:</span>
            <span className={style.clockNumber}>{secondsDezena}</span>
            <span className={style.clockNumber}>{secondsUnit}</span>
        </>
    )
}