import Icons from '../Icons/Icons';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className='sticky-top pt-1 pb-1 bg-white'>
            <div className="search-bar d-flex flex-row p-2 mt-1 mb-1 mx-auto rounded-pill bg-secondary bg-opacity-10">
                <div className="search-icon mx-2">
                    <Icons iconName={"search"}/>
                </div>
                <div className="w-100">
                    <input className='w-100 border-0' type="text" placeholder='Search Twitter'/>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;