import Buttons from '../../Components/Button/Buttons';
import Icons from '../../Components/Icons/Icons';
import './Messages.css';

const Messages = () => {
    document.title = "Messages / Twitter";

    return(
        <div className="d-flex border-start border-end min-vh-100 w-100">
            <div className="messages border-end w-100">
                <div className="d-flex">
                    <div className="messages-header flex-grow-1 fw-bold ms-3 my-3">Messages</div>
                    <div className="settings-icon-item mt-auto mb-auto rounded-pill">
                        <div className="settings-icon m-auto">
                            <Icons iconName={"settings"}/>
                        </div>
                    </div>
                    <div className="settings-icon-item mt-auto mb-auto rounded-pill">
                        <div className="settings-icon m-auto">
                            <Icons iconName={"message"}/>
                        </div>
                    </div>
                </div>
                <div className='messages-info m-auto mt-3'>
                    <div className='d-inline-block fw-bold fs-2 text-start'>Welcome to your <div>inbox!</div></div>
                    <div className='d-inline-block text-secondary text-start mt-2'>Drop a line, share Tweets and more with private conversations between you and others on Twitter. </div>
                    <div className='messages-button mt-4'>
                        <Buttons buttonText={"Write a Message"} buttonType={"btn-primary message-button"}/>
                    </div>
                </div>
            </div>
            <div className="message-box w-100 m-auto">
                <div className='message-box-info m-auto'>
                    <div className='fw-bold fs-3 text-start'>Select a message</div>
                    <div className='d-inline-block text-secondary text-start mt-2'>Choose from your existing conversations, start a new one, or just keep swimming.</div>
                    <div className='message-box-button mt-4'>
                        <Buttons buttonText={"New message"} buttonType={"btn-primary message-button"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;