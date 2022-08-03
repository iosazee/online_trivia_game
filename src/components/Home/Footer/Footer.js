import "./Footer.css"

function Footer() {
    return (
        <div className="footer-container">
            <h3 className="footer-header">Follow us on social media:</h3>
            <div className="footer-links">
                <a href="https://www.linkedin.com/in/iosazee/" target="_blank" rel="noreferrer"> <img title="linkedinlogo" src="Images/linkedin-logo.png" alt="linkedin Logo" className="linkedinLogo"/> </a>
                <a href="https://github.com/iosazee" target="_blank" rel="noreferrer"> <img title="githublogo" src="Images/github.png" alt="github logo" className="githubLogo"/> </a>
            </div>    
        </div>
    )
}

export default Footer;