import { useEffect, useState } from "react";
import "./ScrollIndicator.scss";

function ScrollIndicator({ url }) {
    const [data, setData] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(apiUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${apiUrl}`);
            if (response.ok) {
                const responseJson = await response.json();
                if (responseJson) {
                    console.log(responseJson);
                    setData(responseJson.products);
                    setLoading(false);
                }
            } else {
                setLoading(false);
                throw new Error(`Cannot Fetch the data - ${response.status} : ${response.statusText}`);
            }
        } catch (error) {
            setLoading(false);
            setErrorMsg(error.message);
            console.error("Error Fetching Data...", error);
        }
    }

    function handleScrollPercentage() {
        const alreadyScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercentage((alreadyScrolled / height) * 100);
    }

    useEffect(() => {
        if (url !== "") {
            fetchData(url);
        }
    }, [url]);

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage);

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    });

    if (loading) {
        return (
            <div className="scroll-indicator-component">
                <div className="scroll-container">Fetching Data...</div>
            </div>
        );
    }

    if (errorMsg) {
        return (
            <div className="scroll-indicator-component">
                <div className="scroll-container">{errorMsg}</div>
            </div>
        );
    }

    return (
        <div className="scroll-indicator-component">
            <div className="scroll-container">
                <div className="scroll-nav">
                    <h1>Custom Scroll Indicator</h1>
                </div>
                <div className="scroll-progress-bar">&nbsp;</div>
                <div className="scroll-data">
                    {data && data.length > 0 ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>) : null}
                </div>
            </div>
        </div>
    );
}

export default ScrollIndicator;
