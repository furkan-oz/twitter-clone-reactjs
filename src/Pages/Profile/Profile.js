import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Buttons from "../../Components/Button/Buttons";
import Icons from "../../Components/Icons/Icons";
import WhoFollow from "../../Components/WhoFollow/WhoFollow";
import "./Profile.css"

const Profile = () => {
    document.title = "Profile / Twitter";
    const navigate = useNavigate();
    const location = useLocation();

    return(
        <div className="border-start border-end w-100 min-vh-100">
            <div className="profile-header d-flex pt-1 sticky-top">
                <div onClick={() => navigate(-1)} className="profile-icon-item mt-auto mb-auto rounded-pill ms-3">
                    <div className="profile-icon m-auto">
                        <Icons iconName={"back"}/>
                    </div>
                </div>
                <div className="flex-grow-1 ms-3">
                    <div className="fw-bold fs-5">Furkan</div>
                    <div className="profile-tweet-count text-secondary">0 Tweets</div>
                </div>
            </div>
            <div className="profile border-bottom position-relative">
                <div className="profile-banner w-100">
                    <img src="" alt="" />
                </div>
                <div className="profile-background position-relative position-absolute top-75 translate-middle bg-white rounded-circle">
                    <div className="profile-photo position-absolute top-50 start-50 translate-middle">
                        <img className="rounded-circle" src="https://pbs.twimg.com/profile_images/1491040091413823488/Hn1NBVdm_400x400.jpg" alt="" />
                    </div>
                </div>
                <div className="profile-info position-relative">
                    <div className="setup-profile-button position-absolute">
                        <Buttons buttonText={"Set up profile"} buttonType={"setup-profile"}/>
                    </div>
                    <div className="mt-5 ms-3 pt-5">
                        <div className="profile-name fw-bold fs-5 lh-1">Furkan</div>
                        <div className="profile-nickname text-secondary">@frkan_oz</div>
                        <div className="mt-3 text-secondary">
                            <div className="join-date-icon d-inline-block me-1">
                                <Icons iconName={"date"}/>
                            </div>
                             Joined April 2014</div>
                        <div className="d-flex mt-2 text-secondary">
                            <div className="me-2"><b className="text-black">0</b> Following</div>
                            <div><b className="text-black">0</b> Followers</div>
                        </div>
                    </div>
                </div>
                <div className="profile-nav mt-3">
                    <div className="d-flex w-100 ">
                        <NavLink  to="/profile" className={({ isActive }) => isActive ? "is-active" : "not-active"}>
                            <div className='profile-nav-item'>
                                <div className=" text-center p-3">Tweets</div>
                                <div style={{opacity: location.pathname === "/profile" ? "100" : "0"}} className='line rounded-pill m-auto'></div>
                            </div>
                        </NavLink>
                        <NavLink  to="/profile/with_replies" className={({ isActive }) => isActive ? "is-active" : "not-active"}>
                            <div className='profile-nav-item'>
                                <div className="text-center p-3">Tweets&replies</div>
                                <div style={{opacity: location.pathname === "/profile/with_replies" ? "100" : "0"}} className='line rounded-pill m-auto'></div>
                            </div>
                        </NavLink>
                        <NavLink  to="/profile/media" className={({ isActive }) => isActive ? "is-active" : "not-active"}>
                            <div className='profile-nav-item'>
                                <div className="text-center p-3">Media</div>
                                <div style={{opacity: location.pathname === "/profile/media" ? "100" : "0"}} className='line rounded-pill m-auto'></div>
                            </div>
                        </NavLink>
                        <NavLink  to="/profile/likes" className={({ isActive }) => isActive ? "is-active" : "not-active"}>
                            <div className='profile-nav-item'>
                                <div className="text-center p-3">Likes</div>
                                <div style={{opacity: location.pathname === "/profile/likes" ? "100" : "0"}} className='line rounded-pill m-auto'></div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div>
                {
                    location.pathname === "/profile" ? <WhoFollow background={"white"} width={"100%"} borderRadius={"0px"}/> 
                    : (location.pathname === "/profile/with_replies" ? <WhoFollow background={"white"} width={"100%"} borderRadius={"0px"}/> 
                    : (location.pathname === "/profile/media" ? 
                        <div className="profile-info w-100 text-center">
                            <img className='profile-info-image mt-5' src="https://abs.twimg.com/sticky/illustrations/empty-states/masked-doll-head-with-camera-400x200.v1.png" alt="" />
                            <div className='profile-text m-auto'>
                            <div className="fs-2 fw-bold mt-4 text-start">Lights, camera … attachments!</div>
                            <div className='d-inline-block text-secondary text-start'>When you send Tweets with photos or videos in them, it will show up here.</div>
                            </div>
                        </div> 
                    : (location.pathname === "/profile/likes") ? 
                        <div className="profile-info w-100 text-center">
                            <div className='profile-text m-auto'>
                            <div className="fs-2 fw-bold mt-4 text-start">You don’t have any likes yet</div>
                            <div className='d-inline-block text-secondary text-start'>Tap the heart on any Tweet to show it some love. When you do, it’ll show up here.</div>
                            </div>
                        </div> 
                        :(null)))

                }
                
            </div>
        </div>
    )
}

export default Profile;