import {useContext} from "react";
import ToDoListContext from "../store/list";

const List = () => {
    const {getItemCount, getItem, removeItem, editItem} = useContext(ToDoListContext);

    if (getItemCount() === 0) return null;

    return (
        <ul className="todolist" id="todolist">
            {
                Array.from({length: getItemCount()}, (_, index) => {
                    const item = getItem(index);
                    return (
                        <li key={index}>
                            <div className="listitem">
                                <div
                                    style={{fontFamily: "serif"}}
                                    contentEditable="true"
                                    suppressContentEditableWarning={true}
                                    onBlur={(e) => editItem(e.target.innerHTML, index)}
                                    dangerouslySetInnerHTML={{__html: item}}
                                >
                                </div>
                                <button
                                    className="delete"
                                    onClick={() => removeItem(index)}
                                    contentEditable="false"
                                >
                                    🗑
                                </button>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default List;
