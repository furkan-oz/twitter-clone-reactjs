import Icons from "../../Icons/Icons";
import './HomeHeader.css';
const HomeHeader = () => {
    return(
        <div className="home-header d-flex justify-content-between sticky-top p-2">
            <div className="fs-5 fw-bold ms-1">Home</div>
            <div className="home-settings-icon rounded-circle">
                <div className="home-tweet-settings mx-auto mt-1">
                    <Icons iconName={"homeSettings"}/>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;