import {createContext} from "react";


export const createValue = (list, setList, isMultiline, setMultiline) => ({
    getItemCount : ()=> (list||[]).length,
    getItem : (index)=>(list||[])[index],
    addItem(item){
        const newList = [...(list||[]), {text: item, status: 'incomplete'}];
        setList(newList);
    },
    removeItem(index) {
        const newList = [...(list||[])];
        newList.splice(index, 1);
        setList(newList);
    },
    editItem(text, index) {
        const newList = [...(list||[])];
        newList[index] = {...newList[index], text};
        setList(newList);
    },
    toggleStatus(index) {
        const newList = [...(list||[])];
        newList[index] = {...newList[index], status: newList[index].status === 'incomplete' ? 'complete' : 'incomplete'};
        setList(newList);
    },
    isMultiline,
    setMultiline
})

const ToDoListContext = createContext({
    getItemCount:()=>0,
    getItem:(index)=>null,
    addItem:(item)=>null,
    removeItem:(index)=>null,
    editItem:(text,index)=>null,
    toggleStatus:(index)=>null,
    isMultiline: false,
    setMultiline: (value) => null
});

 export default ToDoListContext;