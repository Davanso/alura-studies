import React, {useState} from 'react';
import style from './App.module.scss';
import Form from "../Form";
import List from "../List/list";
import Timer from "../timer/timer";
import {ITask} from "../../types/task";

function App() {
    const  [tasks, setTasks] = useState<ITask[] | []>([]);
      return (
        <div className={style.AppStyle}>
          <Form setTasks = {setTasks}/>
          <List tasks={tasks}/>
          <Timer />
        </div>
      );
    }

export default App;
