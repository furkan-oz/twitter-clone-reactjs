import Buttons from '../../Button/Buttons'
import './WhoFollowItem.css'

const WhoFollowItem = () => {
    return(
        <div className="WhoFollowItem">
            <div className="ProfilePhoto">
                <img src="https://pbs.twimg.com/profile_images/1408089447455891461/hwvI8tM1_400x400.jpg" alt="" />
            </div>
            <div className="ProfileInfo">
                <div className="ProfileName">Windows</div>
                <div className="ProfileNick">@Windows</div>
            </div>
            <div className="FollowButton">
                <Buttons buttonType={"FollowBtn"} buttonText={"Follow"}/>
            </div>
        </div>
    )
}

export default WhoFollowItem;