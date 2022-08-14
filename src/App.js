import LeftSideBar from "./Components/SideBar/LeftSideBar/LeftSideBar.js";
import RightSideBar from "./Components/SideBar/RightSideBar/RightSideBar.js";
import HomeTweets from "./Components/Tweets/HomeTweets.js";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3"><LeftSideBar/> </div>
        <div className="col-5"><HomeTweets/></div>
        <div className="col-4"><RightSideBar/> </div>
      </div>
    </div>
  );
}

export default App;
 