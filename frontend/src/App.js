import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import LandingSection from './Components/LandingSection/LandingSection';
import TradeWithUs from './Components/TradeWithUs/TradeWithUs';
import Features from './Components/Features/Features';
import Feedback from './Components/Feedback/Feedback';
import ContactUS from './Components/ContactUS/ContactUS';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingSection />
      <TradeWithUs />
      <Features />
      <Feedback />
      <ContactUS />
    </div>
  );
}

export default App;
