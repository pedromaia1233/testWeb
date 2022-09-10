import "./topbar.css"
import { Mail} from '@material-ui/icons';
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function Topbar({menuOpen, setMenuOpen}) {

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
            <div className="left">
            
                    <div className="itemContainer">
                    <Link to="/"><img src={Logo} className="icon" alt=""/></Link>
                    </div>
                </div>
                <div className="right">
                    <Link to="/"> Início </Link>
                    <Link to="/portfolio"> Portfolio </Link>
                    <Link to="/testemunhos"> Testemunhos </Link>
                    <Link to="/about"> Sobre </Link>
                    <Link to="/contact"> Contacto </Link>
                </div>
            </div>
        </div>
    )
}
