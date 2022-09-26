import Buttons from "../../Button/Buttons";
import './NewListItem.css';

const NewListItem = () => {
    return(
            <div className="list-item d-flex">
                <div className="list-item-image">
                    <img className="rounded-3 m-3" src="https://pbs.twimg.com/media/EXZ3BXhUwAEFNBE?format=png&name=240x240" alt="" />
                </div>
                <div className="mt-3 flex-grow-1">
                    <div className="fw-semibold">Kultur Sanat</div>
                    <div className="d-flex">
                        <div className="list-item-text fw-bold">Berk Bogazkesenli</div>
                        <div className="list-item-text text-secondary ms-1">@turanberkb</div>
                    </div>
                </div>
                <div className="mt-3 me-3">
                    <Buttons buttonType={"FollowBtn"} buttonText={"Follow"}/>
                </div>
            </div>
    )
}
export default NewListItem;