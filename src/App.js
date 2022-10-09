import { Navigate, NavLink, Route, Routes, useLocation } from "react-router-dom";
import Icons from "./Components/Icons/Icons.js";
import LeftSideBar from "./Components/SideBar/LeftSideBar/LeftSideBar.js";
import RightSideBar from "./Components/SideBar/RightSideBar/RightSideBar.js";
import Bookmarks from "./Pages/Bookmarks/Bookmarks.js";
import Explore from "./Pages/Explore/Explore.js";
import Home from "./Pages/Home/Home.js";
import Lists from "./Pages/Lists/Lists.js";
import Messages from "./Pages/Messages/Messages.js";
import Notifications from "./Pages/Notifications/Notifications.js";
import Profile from "./Pages/Profile/Profile.js";

const App = () => {
  const location = useLocation();
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-3"><LeftSideBar/></div>
        <div className={location.pathname === "/messages" ? "col-9" : "col-5"}>
          <Routes> 
              <Route path="/" element={<Navigate to="/home" />} />
              <Route index path='home' element={<Home />}/>
              <Route path='explore' element={<Explore/>}/>
              <Route path='notifications' element={<Notifications/>}/>
              <Route path='notifications/mentions' element={<Notifications/>}/>
              <Route path='messages' element={<Messages/>}/>
              <Route path='bookmarks' element={<Bookmarks/>}/>
              <Route path='lists' element={<Lists/>}/>
              <Route path='profile' element={<Profile/>}/>
              <Route path='profile/with_replies' element={<Profile/>}/>
              <Route path='profile/media' element={<Profile/>}/>
              <Route path='profile/likes' element={<Profile/>}/>

          </Routes>
        </div>
        {location.pathname === "/messages" ? null : <div className="col-4"><RightSideBar/></div>}
      </div>
      <div className="row sticky-bottom bg-white">
        <div className="col-12">
          <div className="navbar-bottom d-flex border-top text-center">
            <div className="navbar-bottom-item">
                <NavLink to="/home">
                    <div>
                      <div className="nav-item d-inline-block rounded-pill p-2 m-1">
                        <div className="nav-icon d-inline-block">
                          <Icons active={location.pathname === "/home" ? true : false} iconName={"home"}/>
                        </div>
                      </div>
                    </div>
                </NavLink>
            </div>
            <div className="navbar-bottom-item">
                <NavLink to="/explore" >
                    <div>
                      <div className="nav-item d-inline-block rounded-pill p-2 m-1">
                        <div className="nav-icon d-inline-block">
                          <Icons active={location.pathname === "/explore" ? true : false} iconName={"search"}/>
                        </div>
                      </div>
                    </div>
                </NavLink>
            </div>
            <div className="navbar-bottom-item">
                <NavLink to="/notifications">
                    <div>
                      <div className="nav-item d-inline-block rounded-pill p-2 m-1">
                        <div className="nav-icon d-inline-block">
                          <Icons active={location.pathname === "/notifications" ? true : (location.pathname === "/notifications/mentions" ? true : false)} iconName={"notifications"}/>
                        </div>
                      </div>
                    </div>
                </NavLink>
            </div>
            <div className="navbar-bottom-item">
                <NavLink to="/messages">
                    <div>
                      <div className="nav-item d-inline-block rounded-pill p-2 m-1">
                        <div className="nav-icon d-inline-block">
                          <Icons active={location.pathname === "/messages" ? true : false} iconName={"messages"}/>
                        </div>
                      </div>
                    </div>
                </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
 