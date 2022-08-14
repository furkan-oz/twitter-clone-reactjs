import HomeHeader from "./HomeHeader/HomeHeader";
import SendTweet from "./SendTweet/SendTweet";

const HomeTweets = () => {
    return(
        <div className="home-tweets border-start border-end h-100 w-100">
            <HomeHeader/>
            <SendTweet/>
        </div>
    )
}

export default HomeTweets;