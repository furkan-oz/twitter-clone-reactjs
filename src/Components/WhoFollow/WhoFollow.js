import WhoFollowItem from "./WhoFollowItem/WhoFollowItem";
import './WhoFollow.css'
import ShowMore from "../Trends/TrendsForYou/ShowMore/ShowMore";

const WhoFollow = () => {
    return(
        <div className="WhoFollow">
            <div className="WhoFollowTitle">
                <h2>Who to follow</h2>
            </div>
            <WhoFollowItem/>
            <WhoFollowItem/>
            <WhoFollowItem/>
            <ShowMore/>
        </div>
    )
}

export default WhoFollow;