import { Link } from 'react-router-dom'
function Footer(){
    return(
        <div className="Footer">
            <div className="footerinfo">
                <h4>YourSiteName</h4>
                <p>A personal project built using React and modern web technologies.Focused on clean UI, performance, and learning by building real features.</p>
                <p>© 2026 TyagiLandSite. All rights reserved.</p>
                </div>

            <div className="footer-list">
                <ul>
                    <li>
                    <Link to="/">home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Project">Projects</Link></li>
                </ul>
            </div>

            

            <div className="footer-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="src/img/fb-icon.png" alt="Facebook" /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="src/img/insta-icon.png" alt="Instagram" /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="src/img/twitter-icon.png" alt="Twitter" /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="src/img/linkedin-icon.png" alt="Linkedin" /></a>
            </div>





        </div>
    );

}
export default Footer;