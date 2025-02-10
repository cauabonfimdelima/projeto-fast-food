import { Link } from 'react-router-dom';
import './footer.css';

function Footer(){
    return(
        <footer>
                
                <div className='logo'>
                <h1><Link to="/">Fast Food</Link></h1>
                </div>

                <div className='contact'>
               <h3>Entre em contato</h3>
               <span>Rua dos Lanches, 123 Rio de Janeiro</span>
               <span>(21) 12312-1231</span>
               <span>contatofastfood@gmail.com</span>
                </div>
                <div className='social'>
                <h3>Siga-nos</h3>
         
                <a href='#' target='_blank'>GitHub</a>
                <a href='#' target='_blank'>Linkedin</a>
                <a href='#' target='_blank'>Instagram</a>
                <a href='#' target='_blank'>Facebook</a>
       
                </div>

        </footer>
    )
}

export default Footer;