import { Link } from 'react-router-dom';
import './signup.css'

function Signup(){
    return(
        <div className="container-signup">

            <article className='article-signup'>
            <span>Faça seu cadastro para pedir seu lanche favorito!</span>
            <div className='article-link'>
                <span>Já tem login?</span>
                <a href='/signin'>Faça Login</a>
            </div>
            <div className='article-img'>
            <img src="./assets/img-section.png"/>
            </div>
            </article>

            <aside className='aside-signup'>
            <form method='post' className='form-signup'>
                <h2>Bem vindo ao nosso</h2> 
                <h2>Fast Food!</h2>
                <label>Email</label>
                <input placeholder="Digite seu email..."
                type="email"
                // value={}
                // onChange={(e)=>{e.target.value}}
                />
                <label>Senha</label>
                <input placeholder="Digite sua senha..."
                 type="password"
                // value={}
                // onChange={(e)=>{e.target.value}}
                />
                <label>Confirme sua Senha</label>
                <input placeholder="Confirme sua senha..."
                type="password"
                />

                <div className='article-link-mobile'>
                <span>Já tem login?</span>
                <a href='/signin'>Faça Login</a>
                </div>


                <input className="btn-signup" type="submit" value="Cadastrar-se"/>
            </form>
            </aside>
        </div>
    )
}

export default Signup;