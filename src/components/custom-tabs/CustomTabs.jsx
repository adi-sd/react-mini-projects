import { useState } from "react";
import "./CustomTabs.scss";
import PropTypes from "prop-types";

function CustomTabs({ tabsContent, onChange }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    return (
        <div className="custom-tabs-component">
            <div className="tabs-container">
                <div className="tabs-frame">
                    <div className="tabs-heading">
                        {tabsContent.map((tabItem, index) => {
                            return (
                                <div
                                    key={index}
                                    className={
                                        index === currentTabIndex ? "tab-header-item selected" : "tab-header-item"
                                    }
                                    onClick={() => {
                                        setCurrentTabIndex(index);
                                        onChange(index);
                                    }}
                                >
                                    <span>{tabItem.name}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="tabs-content">
                        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                            ? tabsContent[currentTabIndex].content
                            : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

CustomTabs.propTypes = {
    tabsContent: PropTypes.array.isRequired,
    onChange: PropTypes.func,
};

export default CustomTabs;
