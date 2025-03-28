import style from "../list.module.scss";

export default function ItemList(props: { task: string, time: string }) {
    const { task, time } = props;
    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}