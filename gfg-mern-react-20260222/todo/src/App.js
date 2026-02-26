import './styles/App.css';
import { useState} from "react";
import {default as ToDoListContext, createValue} from "./store/list";
import "./styles/styles.css";
import AddEntry from "./component/AddEntry";
import List from "./component/List";


function App() {
  const [items, setItems] = useState([]);

  return (
    <ToDoListContext.Provider value={createValue(items, setItems)}>
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

export default App;
