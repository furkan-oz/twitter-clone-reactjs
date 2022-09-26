import Icons from "../../../Icons/Icons";
import "./NavItem.css"

const NavItem = (props) => {
  return (
    <div>
      <div className="nav-item d-inline-block rounded-pill p-2 m-1">
        <div className="nav-icon d-inline-block">
          <Icons active={props.iconActive} iconName={props.itemIcon}/>
        </div>
        <div className="nav-text fs-5 mx-4 align-middle">{props.itemText}</div>
      </div>
    </div>
  );
};

export default NavItem;