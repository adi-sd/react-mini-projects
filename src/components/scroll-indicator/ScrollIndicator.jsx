import { useEffect, useRef, useState } from "react";
import "./ScrollIndicator.scss";
import ProductDataContainer from "./ProductDataContainer";
import PropTypes from "prop-types";

function ScrollIndicator({ url }) {
    const scrollableDivRef = useRef(null);
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
        const scrollableDiv = scrollableDivRef.current;
        if (!scrollableDiv) {
            return;
        }
        const scrollTop = scrollableDiv.scrollTop;
        const scrollHeight = scrollableDiv.scrollHeight;
        const clientHeight = scrollableDiv.clientHeight;
        const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
        // console.log(scrollPercent);
        setScrollPercentage(scrollPercent);
    }

    useEffect(() => {
        if (url !== "") {
            fetchData(url);
        }
    }, [url]);

    useEffect(() => {
        const scrollableDiv = scrollableDivRef.current;
        if (scrollableDiv) {
            scrollableDiv.addEventListener("scroll", handleScrollPercentage);
        }
        return () => {
            if (scrollableDiv) {
                scrollableDiv.removeEventListener("scroll", handleScrollPercentage);
            }
        };
    }, [data]);

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
                <div className="scroll-progress-bar">
                    <div style={{ width: `${scrollPercentage}%` }} className="scroll-progress-indicator"></div>
                </div>
                {data && data.length > 0 ? (
                    <ProductDataContainer ref={scrollableDivRef} data={data}></ProductDataContainer>
                ) : null}
                {/* <div>{"Scroll Percentage - " + Math.ceil(scrollPercentage)}</div> */}
            </div>
        </div>
    );
}

ScrollIndicator.propTypes = {
    url: PropTypes.string,
};

export default ScrollIndicator;
