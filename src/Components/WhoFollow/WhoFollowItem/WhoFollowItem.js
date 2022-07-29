import Buttons from '../../Button/Buttons'
import './WhoFollowItem.css'

const WhoFollowItem = () => {
    return(
        <div className="who-follow-item d-flex align-items-center w-100 m-auto">
            <div className="follow-profile-photo mt-2 mb-2 ms-3">
                <img className='rounded-circle' src="https://pbs.twimg.com/profile_images/1408089447455891461/hwvI8tM1_400x400.jpg" alt="" />
            </div>
            <div className="d-flex flex-column ms-1">
                <div className="follow-profile-name fw-semibold">Windows</div>
                <div className="follow-profile-nick text-secondary">@Windows</div>
            </div>
            <div className="ms-auto me-3">
                <Buttons buttonType={"FollowBtn"} buttonText={"Follow"}/>
            </div>
        </div>
    )
}

export default WhoFollowItem;