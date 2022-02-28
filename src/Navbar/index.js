import logo from '../assets/hero/Group.png'
import './style.css';
function Navbar(){
    return(
<div class="container">
 <div class="logo">
     <img src={logo} alt="Logo" />
     <h2><span>The</span>Box</h2>
 </div>
 <div class="navbar">
     <a href="#">Home</a>
     <a href="#">About us </a>
     <a href="#">Projects</a>
     <a href="#">Services</a>
     <a href="#" style={{color:"#F9995D"}}>Contact Us</a>
 </div>
</div>
    )
}
export default Navbar;