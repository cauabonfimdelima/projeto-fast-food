import { Link } from 'react-router-dom';
import './erro.css'

function Erro(){
    return(
        <div className='not-found'>
            <h1>Erro 404</h1>
            <p>Essa página não existe</p>
            <Link to="/">Voltar para Home</Link>
            {/* <Link to="/menu">Voltar para Cardápio</Link> */}
        </div>
    )
}

export default Erro;
