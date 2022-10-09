import Icons from '../../Components/Icons/Icons';
import SearchBar from '../../Components/SearchBar/SearchBar';
import TrendsForYou from '../../Components/Trends/TrendsForYou/TrendsForYou';
import "./Explore.css";
const Explore = () => {
    document.title = "Explore / Twitter";

    return(
        <div className="border-start border-end h-100 w-100">
            <div className='d-flex flex-row sticky-top bg-white'>
                <div className='w-100'>
                    <SearchBar/>
                </div>
                <div className="settings-icon-item mt-auto mb-auto rounded-pill">
                    <div className="settings-icon m-auto">
                        <Icons iconName={"settings"}/>
                    </div>
                </div>
            </div>
            <div className='position-relative'>
                <img className='explore-image w-100' src="https://pbs.twimg.com/semantic_core_img/1255910073831788550/xm0-QtpW?format=jpg&name=small" alt="" />
                <div className='explore-text position-absolute mb-4 pb-3 ms-3 text-white '>Event · LIVE</div>
                <div className='explore-header-text position-absolute mb-2 ms-3 text-white fw-bold fs-4'>Updates on the COVID-19 situation in Turkey</div>
            </div>
            <div className='border-top border-bottom'>
                <TrendsForYou borderRadius={"0px"} width={"100%"}/>
            </div>
        </div>
    )
}

export default Explore;