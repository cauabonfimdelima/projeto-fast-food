import { Link } from "react-router-dom";
import "./header.css";

function Header(){
    return(
        <header>    
            <div className="logo">
                <h1><Link to="/">Fast Food</Link></h1>
            </div>

            <nav className="menu-nav">
                <ul>
                    <Link><li>Lanches</li></Link>
                    <Link><li>Bebidas</li></Link>
                    <Link><li>Entrar</li></Link>
                </ul>
            </nav>

        </header>
    )
}

export default Header;