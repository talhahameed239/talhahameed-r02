import './style.css'
import card1 from '../assets/resons/card1.png'
import card2 from '../assets/resons/card2.png'
import card3 from '../assets/resons/card3.png'
function Reputation() {
    return (
        <div>
            <div class="repu">
                <h2>Our Reputation</h2>
                <div class="box"> 
                   <img src={card1} alt="card1"/>
                   <img src={card2} alt="card2"/>
                   <img src={card3} alt="card3"/>
                </div>
            </div>

        </div>
    )
}
export default Reputation;