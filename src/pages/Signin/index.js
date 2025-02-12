import './signin.css'

function Signin(){
    return(
        <div className="container-signin">

        <article className='article-signin'>
        <span>Pronto para saborear o melhor lanche da cidade?</span>
        <div className='article-link'>
            <span>Ainda não tem uma conta?</span>
            <a href='/signup'>Cadastre-se</a>
        </div>
        <div className='article-img'>
        <img src="./assets/img-section.png"/>
        </div>
        </article>

        <aside className='aside-signin'>
        <form method='post' className='form-signin'>
        <h2>Bem-vindo de volta!</h2>
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
            {/* <label>Confirme sua Senha</label>
            <input placeholder="Confirme sua senha..."
            type="password"
            /> */}

                <div className='article-link-mobile'>
                <span>Ainda não tem uma conta?</span>
                <a href='/signup'>Cadastre-se</a>
                </div>

            <input className="btn-signin" type="submit" value="Entrar"/>
        </form>
        </aside>
    </div>
    )
}

export default Signin;