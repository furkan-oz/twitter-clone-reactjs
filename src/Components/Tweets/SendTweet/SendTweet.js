import Icons from '../../Icons/Icons';
import Buttons from '../../Button/Buttons';
import './SendTweet.css';
import { useState } from 'react';

const SendTweet = () => {
    const [visible,setVisible] = useState(false);
    
    return(
        <div>
            <div className="d-flex m-2">
                <div className="tweet-profile-photo h-100 m-1">
                    <img className='rounded-circle' src="https://pbs.twimg.com/profile_images/1491040091413823488/Hn1NBVdm_400x400.jpg" alt="" />
                </div>
                <div className="tweet-area ms-2 mt-3">
                    <div className="textarea mb-3" contentEditable="true" aria-multiline="true" onClick={() => setVisible(true)}></div>
                    <div className='who-can-reply ps-2 pe-2 pb-1 pt-1' style={{display: visible ? "inline" : "none"}}>
                        <div className="reply-icon d-inline-block me-1">
                            <Icons iconName={"everyone"}/>
                        </div>
                         Everyone can reply
                    </div>
                    <div className="border-bottom mt-3 mb-3"></div>
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
                        <Buttons buttonType={"btn-primary tweet-button"} buttonText={"Tweet"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendTweet;