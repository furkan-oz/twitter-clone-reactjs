import { useEffect, useState } from 'react';
import Icons from '../Icons/Icons';
import './Tweet.css';

const Tweet = () => {
    const [names,setNames] = useState();
    const [lastName,setLastNames] = useState();
    const [picture,setPicture] = useState();
    const [username,setUsername] = useState();
    const [commentCount,setCommentCount] = useState();
    const [retweetCount,setRetweetCount] = useState();
    const [followCount,setFollowCount] = useState();
    const [tweetTime,setTweetTime] = useState();



    
    const randomNumber = () => {
        setCommentCount(Math.floor(Math.random()*1000));
        setRetweetCount(Math.floor(Math.random()*100));
        setFollowCount(Math.floor(Math.random()*10000));
        setTweetTime(Math.floor(Math.random()*12));


    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://randomuser.me/api/')
            const data = await response.json();
            setNames(data.results[0].name.first);
            setLastNames(data.results[0].name.last);
            setUsername(data.results[0].login.username);
            setPicture(data.results[0].picture.large);
            
        }
        fetchData();
        randomNumber()
      },[]);

    return(
        <div className="tweet-container border-top">
            <div className="d-flex p-3 position-relative">
                <div className="tweet-profile-photo">
                    <img className='rounded-circle' src={picture} alt="" />
                </div>
                <div className="tweet-content d-flex flex-column ms-2 w-75">
                    <div className="tweet-profile-info d-flex">
                        <div className="tweet-profile-name fw-bold">{names+" "+lastName}</div>
                        <div className="tweet-profile-nickname ms-1 text-secondary">@{username}</div>
                        <div className="tweet-time ms-1 text-secondary">{tweetTime}h</div>
                        <div className="tweet-icon-item rounded-pill position-absolute">
                            <div className="tweet-more-icon m-auto">
                                <Icons iconName={"noCircleMore"} />
                            </div>
                        </div>
                    </div>
                    <div className="tweet-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum obcaecati dolore doloribus eveniet quasi ratione illo, rem dolorem laudantium!</div>
                    <div className="tweet-icons d-flex justify-content-between mt-2">
                        <div className="tweet-comment d-flex">
                            <div className="comment-icon-item rounded-pill">
                                <div className="comment-icon rounded-pill m-auto">
                                    <Icons iconName={"comment"}/>
                                </div>
                            </div>
                            <div>{commentCount}</div>
                        </div>
                        <div className="tweet-retweet d-flex">
                            <div className="retweet-icon-item rounded-pill">
                                <div className="retweet-icon m-auto">
                                    <Icons iconName={"retweet"}/>
                                </div>
                            </div>
                            <div>{retweetCount}</div>
                        </div>
                        <div className="tweet-like d-flex">
                            <div className="like-icon-item rounded-pill">
                                <div className="like-icon m-auto">
                                    <Icons iconName={"like"}/>
                                </div>
                            </div>
                            <div>{followCount}</div>
                        </div>
                            <div className="share-icon-item rounded-pill">
                                <div className="share-icon m-auto">
                                    <Icons iconName={"share"}/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet;