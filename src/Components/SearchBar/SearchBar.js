import Icons from '../Icons/Icons';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className='SearchBarItem'>
            <div className="SearchBar">
                <div className="SearchIcon">
                    <Icons iconName={"search"}/>
                </div>
                <div className="SearchBarInput">
                    <input type="text" placeholder='Search Twitter'/>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;