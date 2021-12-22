import "./topbar.css"
import { Mail} from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="/" className="logo">JD PH</a>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>jenniferduarteph@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <Link to="/"> Início </Link>
                    <Link to="/portfolio"> Portfolio </Link>
                    <Link to="/about"> Sobre </Link>
                    <Link to="/contact"> Contacto </Link>
                </div>
            </div>
        </div>
    )
}
