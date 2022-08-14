import HomeIcon from "./HomeIcon";
import ExploreIcon from "./ExploreIcon";
import NotificationsIcon from "./NotificationsIcon";
import MessagesIcon from "./MessagesIcon";
import BookmarksIcon from "./BookmarksIcon";
import ListsIcon from "./ListsIcon";
import ProfileIcon from "./ProfileIcon";
import MoreIcon from "./MoreIcon";
import SearchIcon from "./SearchIcon";
import NoCircleMoreIcon from "./NoCircleMoreIcon";
import HomeSettingsIcon from "./HomeSettingsIcon";
import EveryoneIcon from "./EveryoneIcon";
import MediaIcon from "./MediaIcon";
import GifIcon from "./GifIcon";
import PollIcon from "./PollIcon";
import EmoteIcon from "./EmoteIcon";
import ScheduleIcon from "./ScheduleIcon";
import LocationIcon from "./LocationIcon";

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
        case 'search':
            return <SearchIcon/>
        case 'noCircleMore':
            return <NoCircleMoreIcon/>
        case 'homeSettings':
            return <HomeSettingsIcon/>
        case 'everyone':
            return <EveryoneIcon/>
        case 'media':
            return <MediaIcon/>
        case 'gif':
            return <GifIcon/>
        case 'poll':
            return <PollIcon/>
        case 'emote':
            return <EmoteIcon/>
        case 'schedule':
            return <ScheduleIcon/>
        case 'location':
            return <LocationIcon/>
        default:
            return null
        }
            
}
export default Icons;
