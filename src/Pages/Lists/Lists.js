import { useNavigate } from "react-router-dom";
import Icons from "../../Components/Icons/Icons";
import NewList from "../../Components/NewList/NewList";
import './Lists.css';

const Lists = () => {
    document.title = "Lists / Twitter";
    const navigate = useNavigate();

    return(
        <div className="lists w-100 min-vh-100 border-start border-end">
            <div className="lists-header d-flex mt-1">
                <div onClick={() => navigate(-1)} className="list-icon-item mt-auto mb-auto rounded-pill ms-3">
                    <div className="list-icon m-auto">
                        <Icons iconName={"back"}/>
                    </div>
                </div>
                <div className="flex-grow-1 ms-3">
                    <div className="fw-bold fs-5">Lists</div>
                    <div className="lists-nickname text-secondary">@frkan_oz</div>
                </div>
                <div className="list-icon-item mt-auto mb-auto rounded-pill">
                    <div className="list-icon m-auto">
                        <Icons iconName={"list"}/>
                    </div>
                </div>
                <div className="list-icon-item mt-auto mb-auto rounded-pill">
                    <div className="list-icon m-auto">
                        <Icons iconName={"noCircleMore"}/>
                    </div>
                </div>
            </div>
            <div className="border-bottom">
                <div className="fw-bold fs-5 ms-3 mt-2">Pinned Lists</div>
                <div className="text-secondary ms-4 mt-5 mb-4 pb-3">Nothing to see here yet — pin your favorite Lists to access them quickly.</div>
            </div>
            <NewList/>
            <div>
                <div className="fw-bold fs-5 ms-3 mt-2">Your Lists</div>
                <div className="text-secondary ms-4 mt-5 mb-4 pb-3">You haven't created or followed any Lists. When you do, they'll show up here.</div>
            </div>
        </div>
    )
}

export default Lists;