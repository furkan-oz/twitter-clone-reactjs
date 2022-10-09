import Tweet from "../../Components/Tweet/Tweet";
import Icons from "../../Components/Icons/Icons";
import Buttons from "../../Components/Button/Buttons";
import { useEffect, useState} from "react";
import './Home.css';
import { NavLink } from "react-router-dom";

const Home = () => {

    document.title = "Home / Twitter";

    const [visible,setVisible] = useState(false);
    const [Tweets, setTweets] = useState(Array.from(Array(30).keys(), n => n + 1));
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
        function handleScroll() {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) return;
            setIsLoading(true);
          }
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);
  
    useEffect(() => {
      if (!isLoading) return;
      MoreTweets();
    }, [isLoading]);
  
    
  
    function MoreTweets() {
      setTimeout(() => {
        setTweets(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
        setIsLoading(false);
      });
    }
    
    return(
        <div className="home-tweets border-start border-end h-100 w-100">
            <div className="home-header d-flex justify-content-between sticky-top p-2">
                <div className="fs-5 fw-bold ms-1">Home</div>
                <div className="home-settings-icon rounded-circle">
                    <div className="home-tweet-settings mx-auto mt-1">
                        <Icons iconName={"homeSettings"}/>
                    </div>
                </div>
            </div>
            <div>
            <div className="d-flex m-2">
            <NavLink to="/profile" >
                <div className="tweet-profile-photo h-100 m-1">
                    <img className='rounded-circle' src="https://pbs.twimg.com/profile_images/1491040091413823488/Hn1NBVdm_400x400.jpg" alt="" />
                </div>
            </NavLink>
                <div className="tweet-area ms-2 mt-3">
                    <div className="textarea mb-3" contentEditable="true" aria-multiline="true" onClick={() => setVisible(true)}></div>
                    <div className='who-can-reply ps-2 pe-2 pb-1 pt-1' style={{display: visible ? "inline" : "none"}}>
                        <div className="reply-icon d-inline-block me-1">
                            <Icons iconName={"everyone"}/>
                        </div>
                         Everyone can reply
                    </div>
                    <div className="border-bottom mt-3 mb-3 me-2"></div>
                    <div className="tweet-more d-flex flex-direction-column justify-content-between align-items-center text-center">
                        <div className="tweet-property d-flex">
                            <div className="send-tweet-icon-item rounded-pill">
                                <div className="send-tweet-icon m-auto">
                                    <Icons iconName={"media"}/>
                                </div>
                            </div>
                            <div className="send-tweet-icon-item rounded-pill">
                                <div className="send-tweet-icon m-auto">
                                    <Icons iconName={"gif"}/>
                                </div>
                            </div>
                            <div className="send-tweet-icon-item rounded-pill">
                                <div className="send-tweet-icon m-auto">
                                    <Icons iconName={"poll"}/>
                                </div>
                            </div>
                            <div className="send-tweet-icon-item rounded-pill">
                                <div className="send-tweet-icon m-auto">
                                    <Icons iconName={"emote"}/>
                                </div>
                            </div>
                            <div className="send-tweet-icon-item rounded-pill">
                                <div className="send-tweet-icon m-auto">
                                    <Icons iconName={"schedule"}/>
                                </div>
                            </div>
                            <div className="send-tweet-icon-item rounded-pill">
                                <div className="send-tweet-icon m-auto">
                                    <Icons iconName={"location"}/>
                                </div>
                            </div>
                        </div>
                        <Buttons buttonType={"btn-primary me-2 tweet-button"} buttonText={"Tweet"}/>
                    </div>
                </div>
            </div>
        </div>
        {Tweets.map((idx)=> <Tweet key={idx}/>)}
        </div>
    )
}

export default Home;