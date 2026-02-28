import "../styles/styles.css";
import React, {useContext, useRef, useState} from "react";
import ToDoListContext from "../store/list";
import isEmpty from "lodash.isempty";
import {isInterpretedEmpty} from "../util/xmldeserializer";
import {getTextViaDOM} from "../util/GetTextViaDOM";

const Placeholder = React.memo(({isEntryThere}) => <span className={["mainentry-label",isEntryThere() ? "has-content" : ""].join(" ")}>Describe Item</span>);

const getTextViaDomOFMainEntry = getTextViaDOM.bind({id: "mainEntry"});

const AddEntry = ()=>{
    const [textContent, setTextContent] = useState("");
    const mainEntryRef = useRef(null);
    const {addItem, isMultiline, setMultiline} = useContext(ToDoListContext);
    const isEntryThere = ()=> !isEmpty(textContent);


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

        console.log(isMultiline);
        console.log(event.data);
        console.log(event.data==="\n");
        console.log(getTextViaDomOFMainEntry());
        if(isMultiline) return;
        if (event.data === '\n') {
            event.preventDefault();
            submitAndClear();
        }
    }

    const onTextChanged = ()=>{
        setTextContent(getTextViaDomOFMainEntry());
    }

    const onBlur = () =>{
        if(isInterpretedEmpty(textContent)){
            setTextContent("");
        }
    }

    const onCheck = (e) => {
        setMultiline(e.target.checked);
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
                <input className="multiline-check" type="checkbox" id="multiline" name="multiline" checked={isMultiline} onChange={onCheck}/>
                Multiline
            </label>
        </form>
    );
}



export default React.memo(AddEntry);
