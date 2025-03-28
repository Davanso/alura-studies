import React from 'react';
import style from './App.module.scss';
import Form from "../Form";
import List from "../List/list";
import Timer from "../timer/timer";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Timer />
    </div>
  );
}

export default App;
