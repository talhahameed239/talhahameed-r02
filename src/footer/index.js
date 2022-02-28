import './style.css'
import Fb from '../assets/links/facebook.png'
import Link from '../assets/links/linkedin.png'
import Twit from '../assets/links/twitter.png'
import logo from '../assets/hero/Group.png'
function Footer() {
    return (
        <div>
            <div class="footer">
                <div class="contact-list">
                    <label>ADDRESS: </label>  6391 Elgin St. Celina, Delaware 10299<br /><br />
                    <label>PHONE:   </label> +84 1102 2703<br /><br />
                    <label>E-MAIL:  </label>   hello@thebox.com<br /><br />
                    <img src={logo} alt="" />
                    <h2>TheBox</h2>
                </div>
                <div class="social-icons">
                    <label>NEWSLETTER:</label><br />
                    <input type="text" placeholder='Your email here' alt='' />
                    <input type="button" value="Subscribe" class="subscribe" /><br /><br />
                    <label>Social:</label><br />
                    <div class="links">
                        <img src={Fb} alt="" />
                        <img src={Link} alt="" />
                        <img src={Twit} alt="" />
                    </div>
                </div>
                <div class="copyright">
                    <p> TheBox Company @ 2022. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;