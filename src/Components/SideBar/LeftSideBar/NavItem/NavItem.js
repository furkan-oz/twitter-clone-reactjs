import Icons from "../../../Icons/Icons";
import "./NavItem.css"

const NavItem = (props) => {
  return (
    <div className="nav-item">
      <div className="nav-item-div">
        <div className="nav-icon">
          <Icons iconName={props.itemIcon}/>
        </div>
        <div className="nav-text align-middle">{props.itemText}</div>
      </div>
    </div>
  );
};

export default NavItem;