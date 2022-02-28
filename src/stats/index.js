import './style.css'
import stat1 from '../assets/stats/stat1.png'
import stat2 from '../assets/stats/stat2.png'
import stat3 from '../assets/stats/stat3.png'
import stat4 from '../assets/stats/stat4.png'
import illus1 from '../assets/stats/illus1.png'
import illus2 from '../assets/stats/illus2.png'
import illus3 from '../assets/stats/illus3.png'
import illus4 from '../assets/stats/illus4.png'
function Statistics() {
    return (
        <div>
            <div class="container1">
                <div class="stat-cards">
                    <img class="illus3" src={illus3} alt="illus3" />
                    <img class="stat1" src={stat1} alt="stat1" />
                    <img class="illus1" src={illus1} alt="illus1" />
                    <img class="stat2" src={stat2} alt="stat2" />
                    <img class="illus4" src={illus4} alt="illus4" />
                    <img class="stat3" src={stat3} alt="stat3" />
                    <img class="stat4" src={stat4} alt="stat4" />
                    <img class="illus2" src={illus2} alt="illus2" />
                </div>
                <div class="heading">
                    <h1>30 Years <br />Experience</h1>
                    <br />
                    <p>Our company has been the<br />leading provided construction<br />services to clients throughout<br />the USA since 1984</p>
                    <a href="#">Contact us</a>
                </div>
            </div>
        </div>
    )
}
export default Statistics;