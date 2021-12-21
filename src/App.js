import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Topbar from './components/topbar/Topbar'
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/menu" element={<Menu/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
