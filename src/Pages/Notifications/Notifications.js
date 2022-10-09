import './Notifications.css';
import Icons from '../../Components/Icons/Icons';
import { NavLink, useLocation } from 'react-router-dom';

const Notifications = () => {
    document.title = "Notifications / Twitter";
    const location = useLocation();
    return(
        <div className="border-start border-end min-vh-100 w-100">
            <div className="border-bottom d-flex flex-column">
                <div className="d-flex justify-content-between">
                    <div className="notification-header fw-bold ms-3 my-3">Notifications</div>
                    <div className="settings-icon-item mt-auto mb-auto rounded-pill">
                        <div className="settings-icon m-auto">
                            <Icons iconName={"settings"}/>
                        </div>
                    </div>
                </div>
                <div className="d-flex w-100 ">
                <NavLink  to="/notifications" className={({ isActive }) => isActive ? "is-active" : "not-active"}>
                    <div className='notification-nav-item'>
                        <div className=" text-center p-3">All</div>
                        <div style={{opacity: location.pathname === "/notifications" ? "100" : "0"}} className='line rounded-pill m-auto'></div>
                    </div>
                </NavLink>
                <NavLink  to="/notifications/mentions" className={({ isActive }) => isActive ? "is-active" : "not-active"}>
                    <div className='notification-nav-item'>
                        <div className="text-center p-3">Mentions</div>
                        <div style={{opacity: location.pathname === "/notifications/mentions" ? "100" : "0"}} className='line rounded-pill m-auto'></div>
                    </div>
                </NavLink>
                </div>
            </div>
            <div className="mt-4">
                <div className="notification-info m-auto text-center">
                    <div className="d-inline-block fw-bold fs-2 text-start">Nothing to see here — <div>yet</div></div>
                    <div className='d-inline-block text-secondary text-start'>{location.pathname === "/notifications/mentions" ? "When someone mentions you, you’ll find it here." : "From likes to Retweets and a whole lot more, this is where all the action happens."}</div>
                </div>
            </div>
        </div>
    )
}

export default Notifications;