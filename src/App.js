// import logo from './logo.svg';
// import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return <>
    <Navbar />
    <Hero />
    <Welcome />
    <Footer />
  </>
}

export default App;
