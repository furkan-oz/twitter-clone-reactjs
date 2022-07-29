import WhoFollowItem from "./WhoFollowItem/WhoFollowItem";
import './WhoFollow.css'
import ShowMore from "../Trends/TrendsForYou/ShowMore/ShowMore";

const WhoFollow = () => {
    return(
        <div className="who-follow d-flex flex-column bg-light mx-auto mt-2">
            <h2 className="fs-5 fw-bold mt-3 mb-3 ms-3">Who to follow</h2>
            <WhoFollowItem/>
            <WhoFollowItem/>
            <WhoFollowItem/>
            <ShowMore/>
        </div>
    )
}

export default WhoFollow;