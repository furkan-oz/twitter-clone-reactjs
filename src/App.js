import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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
    </div>
  );
}

export default App;
 