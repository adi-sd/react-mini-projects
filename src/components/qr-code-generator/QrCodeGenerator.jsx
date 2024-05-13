import { useState } from "react";
import "./QrCodeGenerator.scss";
import QRCode from "react-qr-code";

function QrCodeGenerator() {
    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    function handleGenerateQrCode() {
        setQrCode(input);
    }

    return (
        <div className="qr-code-generator-component">
            <div className="qr-code-container">
                <h1>QR Code Generator</h1>
                <div className="qr-code-form">
                    <input
                        type="text"
                        name="qr-code"
                        id="qr-code"
                        placeholder="Enter your value here"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <div className="qr-code-buttons">
                        <button disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQrCode}>
                            Generate Code
                        </button>
                        <button
                            disabled={input && input.trim() !== "" ? false : true}
                            onClick={() => {
                                setInput("");
                                setQrCode("");
                            }}
                        >
                            Clear
                        </button>
                    </div>
                </div>
                {qrCode && qrCode.trim() !== "" ? (
                    <QRCode id="qr-code-value" value={qrCode} size={400} level="Q"></QRCode>
                ) : null}
            </div>
        </div>
    );
}

export default QrCodeGenerator;
