import "./Buttons.css";

const Buttons = (props) => {
    return(
        <button type="button" className={`btn ${props.buttonType}`}><i className={`bx ${props.iconType}`}></i> {props.buttonText}</button>
    )
}

export default Buttons;