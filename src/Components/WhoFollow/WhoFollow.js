import WhoFollowItem from "./WhoFollowItem/WhoFollowItem";
import './WhoFollow.css'
import ShowMore from "../ShowMore/ShowMore";

const WhoFollow = (props) => {
    return(
        <div className="who-follow d-flex flex-column mx-auto mt-2" style={{background: props.background , width:props.width}}>
            <h2 className="fs-5 fw-bold mt-3 mb-3 ms-3">Who to follow</h2>
            <WhoFollowItem/>
            <WhoFollowItem/>
            <WhoFollowItem/>
            <ShowMore borderRadius={props.borderRadius}/>
        </div>
    )
}

export default WhoFollow;