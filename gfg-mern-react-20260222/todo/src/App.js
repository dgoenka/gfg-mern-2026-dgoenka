import './styles/App.css';
import { useState, useEffect, useRef } from "react";
import {default as ToDoListContext, createValue} from "./store/list";
import "./styles/styles.css";
import AddEntry from "./component/AddEntry";
import List from "./component/List";
import React from "react";

function App() {
  const [items, setItems] = useState([]);
  const [isMultiline, setMultiline] = useState(false);
  const [scrollState, setScrollState] = useState({ top: false, bottom: false });

  useEffect(() => {
      const handleScroll = () => {
          const scrollTop = window.scrollY;
          const windowHeight = window.innerHeight;
          const docHeight = document.documentElement.scrollHeight;

          setScrollState({
              top: scrollTop > 0,
              bottom: scrollTop + windowHeight < docHeight - 10 // buffer
          });
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check

      return () => window.removeEventListener('scroll', handleScroll);
  }, [items]); // Re-run when items change as document height might change

  return (
    <ToDoListContext.Provider value={createValue(items, setItems, isMultiline, setMultiline)}>
        <div className={`App ${scrollState.top ? 'scroll-top' : ''} ${scrollState.bottom ? 'scroll-bottom' : ''}`}>
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
