import './style.css';
import project from  '../assets/projectCard/ProjectCard.png'
import project1 from '../assets/projectCard/ProjectCard 1.png'
import project2 from '../assets/projectCard/ProjectCard2.png'
import project3 from '../assets/projectCard/ProjectCard 3.png'
import nav from '../assets/projectCard/navigation.png'
function Project() {
    return (
        <div>
            <div class="container2">
                <div class="all">
                    <h3>Projects</h3>
                    <li style={{color:"blue",borderLeft:"3px solid blue"}}>All</li>
                    <li>Commercial</li>
                    <li>Residential</li>
                    <li>Other</li>
                </div>
                <div class="pics">
                    <img src={project} alt="card" />
                    <img src={project1} alt="card" />
                    <img src={project2} alt="card" />
                    <img src={project3} alt="card" />
                    <img class="nav" src={nav} alt="navbar" />
                </div>
            </div>
        </div>
    )
}
export default Project;