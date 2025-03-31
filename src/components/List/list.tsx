import style from './list.module.scss'
import ItemList from "./item/item";
import {useState} from "react";

function List() {
    const  [tasks, setTasks] = useState([{
        task: 'React',
        time: '02:00:00',
    }, {
        task: 'Javascript',
        time: '01:00:00',
    }])

    return (
        <aside className= {style.taskList}>
            <h2 onClick={() =>
                setTasks([...tasks, {task: 'React', time: '02:00:00'}])
            }>Studies of the day</h2>
            <ul>
                {tasks.map((task, index) => (
                    <ItemList
                        key={index}
                        task={task.task}
                        time={task.time}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;