import './styles/App.css';
import { useState} from "react";
import {default as ToDoListContext, createValue} from "./store/list";
import "./styles/styles.css";
import AddEntry from "./component/AddEntry";
import List from "./component/List";
import React from "react";

function App() {
  const [items, setItems] = useState([]);
  const [isMultiline, setMultiline] = useState(false);

  return (
    <ToDoListContext.Provider value={createValue(items, setItems, isMultiline, setMultiline)}>
        <div className="App">
            <div className="top">
                <h1 className="appheader">My To Do List</h1>
                <AddEntry/>
            </div>
            <List/>
        </div>
    </ToDoListContext.Provider>
);
}

export default React.memo(App);
