import { useState } from "react";
import MenuList from "./MenuList";
import "./SideMenu.scss";
import PropTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa";

function MenuItem({ item }) {
    const [displayChildren, setDisplayChildren] = useState({});

    function handleToggleChildren(currentItemLabel) {
        setDisplayChildren({
            ...displayChildren,
            [currentItemLabel]: !displayChildren[currentItemLabel],
        });
    }

    return (
        <li className="menu-item">
            <div className="menu-item-container">
                <span className="item-label">{item.label}</span>
                {item && item.children && item.children.length > 0 ? (
                    <span className="item-icon" onClick={() => handleToggleChildren(item.label)}>
                        {displayChildren[item.label] ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}
                    </span>
                ) : null}
            </div>
            {item && item.children && item.children.length > 0 && displayChildren[item.label] ? (
                <MenuList list={item.children}></MenuList>
            ) : null}
        </li>
    );
}

MenuItem.propTypes = {
    item: PropTypes.object,
};

export default MenuItem;
