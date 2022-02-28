import './style.css'
import Ad from '../assets/ads/Ads.png'
function Ads(){
    return(
        <div>
            <div class="advertise">
                <img src={Ad} alt="Advertisement" />
            </div>
        </div>
    )
}
export default Ads;