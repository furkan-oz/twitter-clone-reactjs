import "./Buttons.css";

const Buttons = (props) => {
    return(
        <button type="button" className={`btn rounded-pill ${props.buttonType}`}>{props.buttonText}</button>
    )
}

export default Buttons;