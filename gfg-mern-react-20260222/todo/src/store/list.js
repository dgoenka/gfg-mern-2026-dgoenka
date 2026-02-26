import {createContext} from "react";


export const createValue = (list, setList) => ({
    getItemCount : ()=> (list||[]).length,
    getItem : (index)=>(list||[])[index],
    addItem(item){
        const newList = [...(list||[]), item];
        setList(newList);
    },
    removeItem(index) {
        const newList = [...(list||[])];
        newList.splice(index, 1);
        setList(newList);
    },
    editItem(text, index) {
        const newList = [...(list||[])];
        newList[index] = text;
        setList(newList);
    }
})

const ToDoListContext = createContext({
    getItemCount:()=>0,
    addItem:(item)=>null,
    removeItem:(index)=>null,
    editItem:(text,index)=>null
});

 export default ToDoListContext;