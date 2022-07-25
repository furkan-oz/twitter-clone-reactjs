import "./Buttons.css";

const Buttons = (props) => {
    return(
        <button type="button" className={`btn ${props.buttonType}`}>{props.buttonText}</button>
    )
}

export default Buttons;