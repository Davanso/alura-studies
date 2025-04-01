import style from "../list.module.scss";
import { ITask } from "../../../types/task";

export default function ItemList(props: ITask) {
    const { task, time, selected, completed, id } = props;
    console.log('Item atual: ', props)
    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}