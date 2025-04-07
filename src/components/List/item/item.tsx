import style from "./item.module.scss";
import { ITask } from "../../../types/task";

interface Props extends ITask {
    handleTaskClick: (task: ITask) => void;
}

export default function ItemList(
    {
        task,
        time,
        selected,
        completed,
        id,
        handleTaskClick
    }: Props){

    return (
        <li
            className={`
            ${style.item} 
            ${selected ? style.selectedItem : ''} 
            ${completed ? style.completedItem : ''}
            `}
            onClick={() =>
                handleTaskClick(
                    {
                        task,
                        time,
                        selected,
                        completed,
                        id}
                )}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}