import React, { useState } from "react";
import style from "./App.module.scss";
import Form from "../Form";
import List from "../List/list";
import Timer from "../timer/timer";
import { ITask } from "../../types/task";

function App() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [activeTask, setActiveTask] = useState<ITask>();

    function handleTaskClick(selectedTask: ITask) {
        setActiveTask(selectedTask);
        setTasks(prevTasks => prevTasks.map(task => ({
            ...task,
            selected: task.id === selectedTask.id
        })))
    }

function endTask() {
    if (activeTask) {
        setActiveTask(undefined);
        setTasks(prevTasks =>
            prevTasks.map(task => {
                if (task.id === activeTask.id) {
                    return {
                        ...task,
                        selected: false,
                        completed: true
                    };
                }
                return task;
            })
        );
    }
}

    return (
        <div className={style.AppStyle}>
            <Form setTasks={setTasks} />
            <List
                tasks={tasks}
                handleTaskClick={handleTaskClick} />
            <Timer
                activeTask={activeTask}
                endTask={endTask}
            />
        </div>
    );
}
export default App;