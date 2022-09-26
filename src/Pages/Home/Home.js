import HomeHeader from "../../Components/Tweets/HomeHeader/HomeHeader";
import SendTweet from "../../Components/Tweets/SendTweet/SendTweet";
import Tweet from "../../Components/Tweets/Tweet/Tweet";

const Home = () => {
    document.title = "Home / Twitter";
    return(
        <div className="home-tweets border-start border-end h-100 w-100">
            <HomeHeader/>
            <SendTweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
        </div>
    )
}

export default Home;