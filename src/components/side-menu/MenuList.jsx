import "./SideMenu.scss";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

function MenuList({ list = [] }) {
    return (
        <ul className="menu-list">
            {list && list.length
                ? list.map((listItem, index) => <MenuItem key={index} item={listItem}></MenuItem>)
                : null}
        </ul>
    );
}

MenuList.propTypes = {
    list: PropTypes.array,
};

export default MenuList;
