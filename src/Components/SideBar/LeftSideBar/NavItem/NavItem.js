import Icons from "../../../Icons/Icons";
import "./NavItem.css"

const NavItem = (props) => {
  return (
    <div>
      <div className="nav-item d-inline-block rounded-pill p-2 m-1">
        <div className="nav-icon d-inline-block">
          <Icons iconName={props.itemIcon}/>
        </div>
        <div className="d-inline fs-5 mx-4 align-middle">{props.itemText}</div>
      </div>
    </div>
  );
};

export default NavItem;