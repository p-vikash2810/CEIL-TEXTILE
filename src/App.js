import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingPageOne from './pages/LandingPageOne/LandingPageOne';
import FooterUp from './components/FooterUp/FooterUp';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import TalentPage from './pages/TalentPage/TalentPage';
import CardPage from './pages/CardPage/CardPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <LandingPageOne />
      <TalentPage />

      <CardPage />
      <FooterUp />
      <Footer />
    </div>
  );
}

export default App;
