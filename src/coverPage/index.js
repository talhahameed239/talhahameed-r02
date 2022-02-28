import picture from '../assets/hero/Hero.png'
import './style.css';
function Cover(){
    return(
        <div class="cover-pic">
             <img src={picture} alt="cover" />
        </div>
    )
}
export default Cover;