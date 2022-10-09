import Icons from "../../../Icons/Icons";
import './TrendItem.css'
const TrendItem = (props) => {
    return (
        <div className="trend-item position-relative p-3">
            <div className="icon-item rounded-pill position-absolute">
                <div className="more-icon m-auto">
                    <Icons iconName={"noCircleMore"} />
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className="about-item text-secondary">{props.trendAbout}</div>
                <div className="name-item fw-bold">#{props.trendName}</div>
                <div className="tweet-count text-secondary">{props.trendCount}</div>
            </div>
        </div>
    )
}

export default TrendItem;