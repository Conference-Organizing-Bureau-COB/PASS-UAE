// import logo from './logo.svg';
// import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Welcome from './Components/Welcome/Welcome';
import Overview from './Components/Overview/Overview';
import About from './Components/About/About';

function App() {
  return <>
    <Navbar />
    <Hero />
    <Welcome />
    <Overview />
    <About />
    <Footer />
  </>
}

export default App;
