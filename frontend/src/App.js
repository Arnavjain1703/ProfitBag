import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import LandingSection from './Components/LandingSection/LandingSection';
import TradeWithUs from './Components/TradeWithUs/TradeWithUs';
import Features from './Components/Features/Features';
import Feedback from './Components/Feedback/Feedback';
import ContactUS from './Components/ContactUS/ContactUS';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingSection />
      <TradeWithUs />
      <Features />
      <Feedback />
      <ContactUS />
      <Footer />
    </div>
  );
}

export default App;
