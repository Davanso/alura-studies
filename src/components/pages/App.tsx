import React from 'react';
import style from './App.module.scss';
import Form from "../Form";
import List from "../List/list";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;
