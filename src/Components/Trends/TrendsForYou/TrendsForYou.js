import './TrendsForYou.css'
import TrendItem from './TrendItem/TrendItem';
import ShowMore from './ShowMore/ShowMore';
const TrendsForYou = () => {
    return(
        <div className="TrendsForYou">
            <div className="TrendsTitle">
                <h2>Trends for you</h2>
            </div>
            <div className='TrendItems'>
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