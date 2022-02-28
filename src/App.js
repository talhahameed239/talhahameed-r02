import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Cover from './coverPage';
import Reputation from './reputation'
import About from './about'
import Services from './services'
import Statistics from './stats'
import Ads from './Ads'
import Project from './project'
import Form from './form'
import Footer from './footer'
function App() {
  return (
    <div className="App">
    <Navbar />
    <Cover />
    <Reputation />
    <About />
    <Services />
    <Statistics />
    <Ads />
    <Project />
    <Form />
    <Footer />
    </div>
  );
}

export default App;
