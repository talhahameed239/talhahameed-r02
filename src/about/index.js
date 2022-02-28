import './style.css';
import card from '../assets/frame/about1.png'
function About() {
    return (
        <div>
            <div class="about">
                <div class="card">
                    <img src={card} alt="card" />
                </div>
                <div class="card2">
                    <h2>About Us</h2>
                    <p>For more than 30 years we have been<br /> delivering world-class
                        construction<br /> and we've built many lasting<br /> relationships along the way
                        <br /><br />
                        We've matured into an industry leader<br />and trusted resource for those seeking<br />
                        quality, innovation and reloability when<br />building in the U.S.</p>
                        <a href="#">More on our History</a>
                </div>
            </div>
        </div>
    )
}
export default About;