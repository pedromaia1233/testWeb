import './App.css';
import Home from './pages/Home';
import Topbar from './components/topbar/Topbar'
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Testemunhos from './pages/Testemunhos';
import PortfolioImages from './pages/PortfolioImages';
import PortfolioImagesEvento from './pages/PortfolioImageEvento';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
//import Footer2 from './components/Footer2';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom"
import {
  retratoFeminino,
  retratoIntimista,
  marcas,
  casais,
  masculino
} from "./data"

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar /> <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/portfolio" element={<Menu/>} />
          <Route exact path="/testemunhos" element={<Testemunhos/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/portfolio/feminino" element={<PortfolioImages title={"Retrato Feminino"} featuredPortfolio={retratoFeminino}/>} />
          <Route exact path="/portfolio/intimista" element={<PortfolioImages title={"Retrato Intimista"} featuredPortfolio={retratoIntimista}/>} />
          <Route exact path="/portfolio/casais" element={<PortfolioImages title={"Casais"} featuredPortfolio={casais}/>} />
          <Route exact path="/portfolio/marcas" element={<PortfolioImages title={"Marcas"} featuredPortfolio={marcas}/>} />
          <Route exact path="/portfolio/eventos" element={<PortfolioImagesEvento title={"Eventos"} featuredPortfolio={retratoFeminino}/>} />
          <Route exact path="/portfolio/masculino" element={<PortfolioImages title={"Retrato Masculino"} featuredPortfolio={masculino}/>} />
        </Routes>
        <Footer />
      </Router>
    </div> 
  );
}

export default App;
