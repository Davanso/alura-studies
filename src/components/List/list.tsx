import style from './list.module.scss'
import ItemList from "./item/item";
import {ITask} from "../../types/task";
import {v4 as uuidv4} from "uuid";


function List({ tasks }: { tasks: ITask[]}) {
    return (
        <aside className= {style.taskList}>
            <h2>
            Studies of the day
            </h2>
            <ul>
                {tasks.map((task, index) => (
                    <ItemList
                        key={index}
                        task={task.task}
                        time={task.time}
                        selected={false}
                        completed={false}
                        id={uuidv4()}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;