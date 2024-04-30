import { useState } from "react";
import data from "./data";
import "./Accordion.scss";

function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(currentId) {
        // console.log(currentId);
        if (selected === currentId) {
            setSelected(null);
        } else {
            setSelected(currentId);
        }
    }

    function handleMultiSelection(currentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);
        if (findIndexOfCurrentId === -1) {
            cpyMultiple.push(currentId);
        } else {
            cpyMultiple.splice(findIndexOfCurrentId, 1);
        }
        setMultiple(cpyMultiple);
    }

    return (
        <div className="accordion-component">
            <button
                className={enableMultiSelection ? "multi-select-enabled" : null}
                onClick={() => {
                    setEnableMultiSelection(!enableMultiSelection);
                    setSelected(null);
                    setMultiple([]);
                }}
            >
                {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
            </button>
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item" key={dataItem.id}>
                            <div
                                className="title"
                                onClick={
                                    enableMultiSelection
                                        ? () => handleMultiSelection(dataItem.id)
                                        : () => handleSingleSelection(dataItem.id)
                                }
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {enableMultiSelection
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                      <div className="content">{dataItem.answer}</div>
                                  )
                                : selected === dataItem.id && <div className="content">{dataItem.answer}</div>}
                        </div>
                    ))
                ) : (
                    <div>
                        <h2>No data found!</h2>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Accordion;
