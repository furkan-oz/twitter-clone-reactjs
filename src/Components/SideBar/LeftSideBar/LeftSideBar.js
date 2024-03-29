import Buttons from "../../Button/Buttons";
import NavItem from "./NavItem/NavItem";
import "./LeftSideBar.css";
import Icons from "../../Icons/Icons";
import { NavLink, useLocation } from "react-router-dom";

const LeftSideBar = () => {
    const location = useLocation();
    let activeStyle={
        fontWeight:"bold",
        color:"black",
    };
    let notActiveStyle={
        color:"black",
    };

    return (
            <nav className="nav ms-3 pt-1 flex-column sticky-top vh-100">
                <NavLink to="/home" style={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
                    <div className="twitter-icon rounded-circle text-center mb-1">
                        <svg className="mt-2" viewBox="0 0 24 24" aria-hidden="true"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                    </div>
                </NavLink>
                <NavLink to="/home" style={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
                    <NavItem iconActive={location.pathname === "/home" ? true : false } itemIcon={"home"} itemText={"Home"}/>
                </NavLink>
                <NavLink to="/explore" style={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
                    <NavItem iconActive={location.pathname === "/explore" ? true : false }  itemIcon={"explore"} itemText={"Explore"}/>
                </NavLink>
                <NavLink to="/notifications" style={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
                    <NavItem iconActive={location.pathname === "/notifications" ? true : (location.pathname === "/notifications/mentions" ? true : false)} itemIcon={"notifications"} itemText={"Notifications"}/>
                </NavLink>
                <NavLink to="/messages" style={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
                    <NavItem iconActive={location.pathname === "/messages" ? true : false } itemIcon={"messages"} itemText={"Messages"}/>
                </NavLink>
                <NavLink to="/bookmarks" style={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
                    <NavItem iconActive={location.pathname === "/bookmarks" ? true : false } itemIcon={"bookmarks"} itemText={"Bookmarks"}/>
                </NavLink>
                <NavLink to="/lists" style={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
                    <NavItem iconActive={location.pathname === "/lists" ? true : false } itemIcon={"lists"} itemText={"Lists"}/>
                </NavLink>
                <NavLink to="/profile" style={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
                    <NavItem iconActive={location.pathname === "/profile" ? true : (location.pathname === "/profile/with_replies" ? true : (location.pathname === "/profile/media" ? true : (location.pathname === "/profile/likes" ? true : false)))} itemIcon={"profile"} itemText={"Profile"}/>
                </NavLink>

                <NavItem itemIcon={"more"} itemText={"More"}/>
                
                <div className="mt-4 ms-1">
                    <Buttons buttonText={"Tweet"} buttonType={"btn-primary sidebar-tweet-button"} />
                    <Buttons buttonText={<Icons iconName={"sidebarButton"}/>} buttonType={"btn-primary sidebar-small-button"} />
                </div>

                <div className="nav-profile-item rounded-pill mt-auto mb-2" >
                    <div className="d-flex flex-row align-items-center mt-2 ms-2">
                        <div className="nav-profile-photo mb-1">
                            <img className="rounded-circle w-100 h-100" src="https://pbs.twimg.com/profile_images/1491040091413823488/Hn1NBVdm_400x400.jpg" alt="" />
                        </div>
                        <div className="nav-profile-info flex-column ms-2 me-5">
                            <div className="nav-profile-name fw-semibold">Furkan Öz</div>
                            <div className="nav-profile-nick text-secondary">@frkan_oz</div>
                        </div>
                        <div className="nav-profile-info-icon ms-auto me-2">
                            <Icons iconName={"noCircleMore"}/>
                        </div> 
                    </div>
                </div>
            </nav>
        
    )
}

export default LeftSideBar;