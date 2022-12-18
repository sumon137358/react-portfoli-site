import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Skill from './components/Skill/Skill';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App" >
   <Header/>
   <Home/>
   <About/>
   <Skill/>
   <Portfolio/>
   <Contact/>
 <Footer/>
    </div>
  );
}

export default App;
