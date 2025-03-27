import React from 'react';

function List() {
    const tasks = [{
        task: 'React',
        time: '02:00:00',
    }, {
        task: 'Javascript',
        time: '01:00:00',
    }]

    return (
        <aside>
            <h2>Studies of the day</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <h3>{task.task}</h3>
                        <span>{task.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;