import SearchBar from "../../SearchBar/SearchBar";
import TrendsForYou from "../../Trends/TrendsForYou/TrendsForYou";
import WhoFollow from "../../WhoFollow/WhoFollow";
import Footer from "./Footer/Footer";
import {useLocation} from "react-router-dom";
import './RightSideBar.css';

const RightSideBar = () => {
    const location = useLocation();

    return (
        <div className="right-side-bar">
        {location.pathname === "/explore" ? <> <WhoFollow/> <Footer/> </> :<> <SearchBar/> <TrendsForYou/> <WhoFollow/> <Footer/> </>}
        </div>
    )
}

export default RightSideBar;