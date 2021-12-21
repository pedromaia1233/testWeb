import "./topbar.css"
import {Person, Mail} from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="/" className="logo">JD PH</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+351 914 955 967</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>pedromaia14@hotmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <Link to="/"> Início </Link>
                    <Link to="/menu"> Portfolio </Link>
                    <Link to="/about"> Sobre </Link>
                    <Link to="/contact"> Contacto </Link>
                </div>
            </div>
        </div>
    )
}
