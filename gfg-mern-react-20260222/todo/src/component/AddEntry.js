import "../styles/styles.css";
import ToDoListContext from "../store/list";
import {use, useCallback, useEffect, useRef, useState} from "react";
import isEmpty from "lodash.isempty";
import {isInterpretedEmpty} from "../util/xmldeserializer";

const Placeholder = ({isEntryThere}) => <span className={["mainentry-label",isEntryThere() ? "has-content" : ""].join(" ")}>Describe Item</span>


const AddEntry = ()=>{
    const [textContent, setTextContent] = useState("");
    const checkedRef = useRef(null);
    const mainEntryRef = useRef(null);
    const {addItem} = use(ToDoListContext);
    const isEntryThere = ()=> !isEmpty(textContent);

    const getTextViaDOM = ()=>{
        const mainEntryDomRef = document.getElementById("mainEntry");
        console.log(mainEntryDomRef.innerHTML);
        return mainEntryDomRef.innerHTML;
    };

    const submitAndClear = (event)=> {
        if(event) event.preventDefault();
        if(!isEntryThere()) return;
        addItem(textContent);
        setTextContent("");
        if (mainEntryRef.current) {
            mainEntryRef.current.innerHTML = "";
        }
    };

    const onKeyDown = (event) =>{

        console.log(checkedRef.current.checked);
        console.log(event.data);
        console.log(event.data==="\n");
        console.log(getTextViaDOM());
        if(checkedRef.current.checked) return;
        if (event.data === '\n') {
            event.preventDefault();
            submitAndClear();
        }
    }

    const onTextChanged = ()=>{
        setTextContent(getTextViaDOM());
    }

    const onBlur = () =>{
        if(isInterpretedEmpty(textContent)){
            setTextContent("");
        }
    }


    return (
        <form className="data-entry-row" onSubmit={submitAndClear}>
            <button type="submit" disabled={!isEntryThere()}>╋</button>
            <div className="mainentry-container">
            <Placeholder isEntryThere={isEntryThere}/>
                <div id={"mainEntry"}
                    className={["mainentry"].join(" ")} contentEditable="true" ref={mainEntryRef}
                     onInput={onTextChanged}
                     onBeforeInput={onKeyDown}
                 onBlur={onBlur}
                ></div>

            </div>
            <label className="multiline-check-label" htmlFor="multiline">
                <input ref={checkedRef} className="multiline-check" type="checkbox" id="multiline" name="multiline"/>
                Multiline
            </label>
        </form>
    );
}



export default AddEntry;
