import './App.css';
import HeaderDiv from './components/headerdiv';
import Welcome from './components/pages/WelcomePage';
import Portfolio from './components/pages/PortfolioPage';
import Navbar from './components/pages/Navbar'
import Footer from './components/pages/Footer'

export default function App() {
  return (
    <div>
     <header>
      <Navbar />
     </header>
     <body>
      <Portfolio />
     </body>
     <footer>
      <Footer />
     </footer>
    </div>
  );
}
