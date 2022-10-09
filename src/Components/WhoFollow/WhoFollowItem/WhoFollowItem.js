import { useEffect, useState } from 'react';
import Buttons from '../../Button/Buttons'
import './WhoFollowItem.css'

const WhoFollowItem = () => {

    const [names,setNames] = useState();
    const [lastName,setLastNames] = useState();
    const [picture,setPicture] = useState();
    const [username,setUsername] = useState();

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
      },[]);

    return(
        <div className="who-follow-item d-flex align-items-center w-100 m-auto">
            <div className="follow-profile-photo mt-2 mb-2 ms-3">
                <img className='rounded-circle' src={picture} alt="" />
            </div>
            <div className="d-flex flex-column ms-1">
                <div className="follow-profile-name fw-semibold">{`${names} ${lastName}`}</div>
                <div className="follow-profile-nick text-secondary">@{username}</div>
            </div>
            <div className="ms-auto me-3">
                <Buttons buttonType={"FollowBtn"} buttonText={"Follow"}/>
            </div>
        </div>
    )
}

export default WhoFollowItem;