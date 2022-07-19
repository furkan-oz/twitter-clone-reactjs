import HomeIcon from "./HomeIcon";
import ExploreIcon from "./ExploreIcon";
import NotificationsIcon from "./NotificationsIcon";
import MessagesIcon from "./MessagesIcon";
import BookmarksIcon from "./BookmarksIcon";
import ListsIcon from "./ListsIcon";
import ProfileIcon from "./ProfileIcon";
import MoreIcon from "./MoreIcon";

const Icons = (props) => {

    switch (props.iconName)
    {
        case 'home':
            return <HomeIcon active={false}/>
        case 'explore':
            return <ExploreIcon active={false}/>
        case 'notifications':
            return <NotificationsIcon active={false}/>
        case 'messages':
            return <MessagesIcon active={false}/>
        case 'bookmarks':
            return <BookmarksIcon active={false}/>
        case 'lists':
            return <ListsIcon active={false}/>
        case 'profile':
            return <ProfileIcon active={false}/>
        case 'more':
            return <MoreIcon/>
          
        default:
            return null
        }
            
}
export default Icons;


/* if(props.iconName === "home"){
    return(
        <HomeIcon active={true}/>
    )
} */