import './Footer.css';

const Footer = () => {
    return(
        <div className="footer mt-3 mb-3 mx-auto">
            <div className="navbar d-flex justify-content-start">
                <div className="navbar-item pe-2 text-secondary link">Terms of Service</div>
                <div className="navbar-item pe-2 text-secondary link">Privacy Policy</div>
                <div className="navbar-item pe-2 text-secondary link">Cookie Policy</div>
                <div className="navbar-item pe-2 text-secondary link">Imprint</div>
                <div className="navbar-item pe-2 text-secondary link">Accessibility</div>
                <div className="navbar-item pe-2 text-secondary link">Ads info</div>
                <div className="navbar-item pe-2 text-secondary link">More...</div>
            <div className="navbar-item text-secondary">© 2022 Twitter, Inc.</div>
            </div>
        </div>
    )
}

export default Footer;