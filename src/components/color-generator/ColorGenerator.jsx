import { useState } from "react";
import "./ColorGenerator.scss";

function ColorGenerator() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#ffffff");

    function getRandomInt(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomColor(typeOfColor) {
        if (typeOfColor === "hex") {
            const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
            let hexColor = "#";
            for (let i = 0; i < 6; i++) {
                hexColor += hex[getRandomInt(hex.length)];
            }
            setColor(hexColor);
        } else {
            const redValue = getRandomInt(256);
            const greenValue = getRandomInt(256);
            const blueValue = getRandomInt(256);
            setColor(`rgb(${redValue}, ${greenValue}, ${blueValue})`);
        }
    }

    return (
        <div className="color-generator-component" style={{ background: color }}>
            <div className="buttons">
                <button
                    className={typeOfColor === "hex" ? "selected" : null}
                    onClick={() => {
                        setTypeOfColor("hex");
                        setColor("#ffffff");
                    }}
                >
                    Create HEX Color
                </button>
                <button
                    className={typeOfColor === "rgb" ? "selected" : null}
                    onClick={() => {
                        setTypeOfColor("rgb");
                        setColor("rgb(255, 255, 255)");
                    }}
                >
                    Create RGB Color
                </button>
                <button className="generator" onClick={() => handleCreateRandomColor(typeOfColor)}>
                    Generate Random Color
                </button>
            </div>
            <div className="details">
                {typeOfColor === "hex" ? <h2>Generating HEX Colors...</h2> : <h2>Generating RGB Colors...</h2>}
                <h2>Color Right Now: {color}</h2>
            </div>
        </div>
    );
}

export default ColorGenerator;
