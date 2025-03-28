import style from './list.module.scss'
import ItemList from "./item/item";

function List() {
    const tasks = [{
        task: 'React',
        time: '02:00:00',
    }, {
        task: 'Javascript',
        time: '01:00:00',
    }]

    return (
        <aside className= {style.taskList}>
            <h2>Studies of the day</h2>
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