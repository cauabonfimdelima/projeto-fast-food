import { Link } from "react-router-dom";
import "./header.css";
import Modal from "../Modal";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";


function Header(){
    const {cart} = useContext(CartContext)
    const [cartOpen, setCartOpen] = useState(false);

    return(
        <header>    
            <div className="logo">
                <h1><Link to="/">Fast Food</Link></h1>
            </div>

            <nav className="menu-nav">
                <ul>
                    <li>
                    <button onClick={()=>setCartOpen(true)}>Carrinho ({cart.length})</button>
                    {cartOpen && <Modal close={()=>setCartOpen(false)}/>}
                    </li>
                    {/* <li><Link to="/signin">Entrar</Link></li> */}
                </ul>
            </nav>


        </header>
    )
}

export default Header;