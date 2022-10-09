import './TrendsForYou.css'
import TrendItem from './TrendItem/TrendItem';
import ShowMore from '../../ShowMore/ShowMore';
import { useEffect, useState } from 'react';

const TrendsForYou = (props) => {

    const [tweetCount,setTweetCount] = useState([]);

    const randomNumber = () => {
        const newTweetCount=[];
        for(let i=0;i<10;i++){
            newTweetCount.push(Math.floor(Math.random()*10000));
            setTweetCount(newTweetCount);
        }
    }

    useEffect(()=>{
        randomNumber();
    },[])

    return(
        <div style={{width: props.width , borderRadius: props.borderRadius}} className="trends-for-you d-flex flex-column bg-light mt-2 mx-auto">
            <div>
                <h2 className='fs-5 fw-bold mt-3 mb-3 ms-3'>Trends for you</h2>
            </div>
            <div>
                <TrendItem trendName={"Ravens"} trendAbout={"NFL · Trending"} trendCount={`${tweetCount[0]} Tweets`}/>
                <TrendItem trendName={"MINvsNO"} trendAbout={"NFL · Trending"} trendCount={`${tweetCount[1]} Tweets`}/>
                <TrendItem trendName={"Jags"} trendAbout={"NFL · Trending"} trendCount={`${tweetCount[2]} Tweets`}/>
                <TrendItem trendName={"Browns"} trendAbout={"NFL · Trending"} trendCount={`${tweetCount[3]} Tweets`}/>
                <TrendItem trendName={"Zach Wilson"} trendAbout={"NFL · Trending"} trendCount={`${tweetCount[4]} Tweets`}/>
                <TrendItem trendName={"Matt Ryan"} trendAbout={"NFL · Trending"} trendCount={`${tweetCount[5]} Tweets`}/>
                <TrendItem trendName={"Skol"} trendAbout={"NFL · Trending"} trendCount={`${tweetCount[6]} Tweets`}/>
                <TrendItem trendName={"Lutz"} trendAbout={"NFL · Trending"} trendCount={`${tweetCount[7]} Tweets`}/>
                <TrendItem trendName={"London"} trendAbout={"NFL · Trending"} trendCount={`${tweetCount[8]} Tweets`}/>
                <TrendItem trendName={"Geno Smith"} trendAbout={"NFL · Trending"} trendCount={`${tweetCount[9]} Tweets`}/>
                
                <ShowMore/>
            </div>
        </div>
    )
}
export default TrendsForYou;