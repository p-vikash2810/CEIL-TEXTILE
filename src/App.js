import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingPageOne from './pages/LandingPageOne/LandingPageOne';
import LandingPageTwo from './pages/LandingPageTwo/LandingPageTwo';
import FooterUp from './components/FooterUp/FooterUp';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import TalentPage from './pages/TalentPage/TalentPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <LandingPageOne />
      <TalentPage />

      <LandingPageTwo />
      <FooterUp />
      <Footer />
    </div>
  );
}

export default App;
