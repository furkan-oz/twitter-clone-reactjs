import Icons from "../../../Icons/Icons";
import './TrendItem.css'
const TrendItem = () => {
    return (
        <div className="trend-item position-relative p-3">
            <div className="icon-item rounded-pill position-absolute">
                <div className="more-icon m-auto">
                    <Icons iconName={"noCircleMore"} />
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className="about-item text-secondary">Music · Trending</div>
                <div className="name-item fw-bold">#Eminem</div>
                <div className="tweet-count text-secondary">13.3K Tweets</div>
            </div>
        </div>
    )
}

export default TrendItem;