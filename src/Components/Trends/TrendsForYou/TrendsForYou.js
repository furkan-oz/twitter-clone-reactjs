import './TrendsForYou.css'
import TrendItem from './TrendItem/TrendItem';
import ShowMore from '../../ShowMore/ShowMore';
const TrendsForYou = (props) => {
    return(
        <div style={{width: props.width , borderRadius: props.borderRadius}} className="trends-for-you d-flex flex-column bg-light mt-2 mx-auto">
            <div>
                <h2 className='fs-5 fw-bold mt-3 mb-3 ms-3'>Trends for you</h2>
            </div>
            <div>
                <TrendItem/>
                <TrendItem/>
                <TrendItem/>
                <TrendItem/>
                <TrendItem/>
                <TrendItem/>
                <TrendItem/>
                <TrendItem/>
                <TrendItem/>
                <TrendItem/>
                <ShowMore/>
            </div>
        </div>
    )
}
export default TrendsForYou;