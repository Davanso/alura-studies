import style from './list.module.scss'
import ItemList from "./item/item";
import {ITask} from "../../types/task";

interface Props {
    tasks: ITask[];
    handleTaskClick: (task: ITask) => void;
}

function List({ tasks, handleTaskClick }: Props) {
    return (
        <aside className= {style.taskList}>
            <h2>
            Studies of the day
            </h2>
            <ul>
                {tasks.map((item) => (
                    <ItemList
                        handleTaskClick={handleTaskClick}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;