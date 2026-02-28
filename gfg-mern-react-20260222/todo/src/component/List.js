import React, {useContext, useRef, useEffect} from "react";
import ToDoListContext from "../store/list";
import {getTextViaDOM} from "../util/GetTextViaDOM";

const ListItem = React.memo(({  index }) => {

    const {getItem, removeItem:onDelete, editItem:onEdit, toggleStatus, isMultiline} = useContext(ToDoListContext);
    const item = getItem(index);
    const divId = `list-item-${index}`;
    const getText = getTextViaDOM.bind({id: divId});

    const onBlur = (event) => {
        setTimeout(() => {
            const upperMost = document.getElementById(divId);
            const activeElement = document.activeElement;
            if (upperMost && (!activeElement || !upperMost.contains(activeElement))) {
                onEdit(getText(), index);
            }
        }, 0);
    }

    const onBeforeInput = (event) => {
        if(isMultiline) return;
        if (event.inputType === 'insertParagraph' || event.data === '\n') {
            event.preventDefault();
            event.target.blur();
        }
    }

    const isComplete = item.status === 'complete';

    return (
        <li>
            <div className="listitem">
                <div
                    id={divId}
                    style={{ fontFamily: "serif", flex: 1, opacity: isComplete ? 0.25 : 1 }}
                    contentEditable={isComplete ?"false":"true"}
                    suppressContentEditableWarning={true}
                    onBlur={onBlur}
                    onBeforeInput={onBeforeInput}
                    dangerouslySetInnerHTML={{__html: item.text}}
                />
                <button
                    className={isComplete ? "incomplete" : "complete"}
                    onClick={() => toggleStatus(index)}
                    contentEditable="false"
                >
                    {isComplete ? '✅' : '☑️'}
                </button>
                <button
                    className="delete"
                    onClick={() => onDelete(index)}
                    contentEditable="false"
                >
                    🗑
                </button>
            </div>
        </li>
    );
});

const List = () => {
    const {getItemCount} = useContext(ToDoListContext);

    if (getItemCount() === 0) return null;

    return (
        <ul className="todolist" id="todolist">
            {
                Array.from({length: getItemCount()}, (_, index) => {
                    return (
                        <ListItem
                            key={index}
                            index={index}
                        />
                    );
                })
            }
        </ul>
    );
}

export default React.memo(List);
