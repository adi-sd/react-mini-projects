import "./SideMenu.scss";
import PropTypes from "prop-types";
import MenuList from "./MenuList";
import { sideMenu } from "./data";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function SideMenu({ menu = sideMenu }) {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="side-menu-component">
            <span className="side-menu-icon">
                <GiHamburgerMenu
                    className={toggleMenu ? "rotate-clockwise" : "rotate-anti-clockwise"}
                    onClick={() => setToggleMenu(!toggleMenu)}
                ></GiHamburgerMenu>
            </span>
            {toggleMenu ? <MenuList list={menu}></MenuList> : null}
        </div>
    );
}

SideMenu.propTypes = {
    menu: PropTypes.array,
};

export default SideMenu;
