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
import CommentIcon from "./CommentIcon";
import RetweetIcon from "./RetweetIcon";
import LikeIcon from "./LikeIcon";
import ShareIcon from "./ShareIcon";
import SettingsIcon from "./SettingsIcon";
import MessageIcon from "./MessageIcon";
import BackIcon from "./BackIcon";
import ListIcon from "./ListIcon";
import JoinDateIcon from "./JoinDateIcon";
import SideBarButtonIcon from "./SideBarButtonIcon";



const Icons = (props) => {

    switch (props.iconName)
    {
        case 'home':
            return <HomeIcon active={props.active}/>
        case 'explore':
            return <ExploreIcon active={props.active}/>
        case 'notifications':
            return <NotificationsIcon active={props.active}/>
        case 'messages':
            return <MessagesIcon active={props.active}/>
        case 'bookmarks':
            return <BookmarksIcon active={props.active}/>
        case 'lists':
            return <ListsIcon active={props.active}/>
        case 'profile':
            return <ProfileIcon active={props.active}/>
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
        case 'comment':
            return <CommentIcon/>
        case 'retweet':
            return <RetweetIcon/>
        case 'like':
            return <LikeIcon/>
        case 'share':
            return <ShareIcon/>
        case 'settings':
            return <SettingsIcon/>
        case 'message':
            return <MessageIcon/>
        case 'back':
            return <BackIcon/>
        case 'list':
            return <ListIcon/>
        case 'date':
            return <JoinDateIcon/>
        case 'sidebarButton':
            return <SideBarButtonIcon/>
        default:
            return null
        }
            
}
export default Icons;
