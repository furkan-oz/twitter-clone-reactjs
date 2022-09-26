import ShowMore from "../ShowMore/ShowMore";
import NewListItem from "./NewListItem/NewListItem";

const NewList = () => {
    return(
        <div className="border-bottom">
            <div className="fw-bold fs-5 ms-3 mt-2">Discover new Lists</div>
                <NewListItem/>
                <NewListItem/>
                <NewListItem/>
            <div>
                <ShowMore borderRadius={"0px"}/>
            </div>
        </div> 
    )
}
export default NewList;