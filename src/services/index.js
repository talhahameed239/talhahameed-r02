import './style.css'
import Card from '../assets/serviceCard/service1.png'
import Card2 from '../assets/serviceCard/service2.png'
import Card3 from '../assets/serviceCard/service3.png'
import Card4 from '../assets/serviceCard/service4.png'
import Card5 from '../assets/serviceCard/service5.png'
import Card6 from '../assets/serviceCard/service6.png'
function Services() {
    return (
        <div>
            <div class="service">
                <h2>Services</h2>
                <div class="service-cards">
                    <img src={Card} alt="card" />
                    <img src={Card2} alt="card2" />
                    <img src={Card3} alt="card3" />
                    <img src={Card4} alt="card1" />
                    <img src={Card5} alt="card2" />
                    <img src={Card6} alt="card3" />
                </div>
            </div>
        </div>
    )
}
export default Services;