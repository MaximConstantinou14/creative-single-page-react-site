import './App.css';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Hero />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
