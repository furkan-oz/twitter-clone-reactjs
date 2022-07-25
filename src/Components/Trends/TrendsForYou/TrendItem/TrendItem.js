import Icons from "../../../Icons/Icons";
import './TrendItem.css'
const TrendItem = () => {
    return (
        <div className="TrendItem">
            <div className="IconItem">
                <div className="MoreIcon">
                    <Icons iconName={"noCircleMore"} />
                </div>
            </div>
            <div className="TextItem">
                <div className="AboutItem">Music · Trending</div>
                <div className="NameItem">#Eminem</div>
                <div className="TweetCount">13.3K Tweets</div>
            </div>
        </div>
    )
}

export default TrendItem;