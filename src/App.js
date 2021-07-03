import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingPageOne from './pages/LandingPageOne/LandingPageOne';
import LandingPageTwo from './pages/LandingPageTwo/LandingPageTwo';
import FooterUp from './components/FooterUp/FooterUp';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPageOne />
      <LandingPageTwo />
      <FooterUp />
      <Footer />
    </div>
  );
}

export default App;
