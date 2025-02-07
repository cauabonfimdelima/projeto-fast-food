import { Link } from 'react-router-dom';
import { useState } from 'react';
import './home.css'

function Home(){

    const [aberto, setAberto] = useState(false);

    const guias = [{
        id: 1,
        pergunta: "Como pedir fast-food de forma rápida e fácil?",
        resposta: [
                    "✅ 1. Cadastre-se gratuitamente em nosso site.",
                    "🔑 2. Faça login na sua conta.",
                    "🍔 3. Escolha seus lanches favoritos e finalize o pedido!"
        ]
    },
    {
        id: 2,
        pergunta: "Quais meios de pagamento o Fast-Food aceita?",
        resposta: [
                   "💳 Aceitamos cartões de crédito e débito.",
                "📲 Pagamentos via PIX e boleto.",
                "💵 Dinheiro para pedidos presenciais."
        ]
    },
    {
        id: 3,
        pergunta: "Como funciona a confirmação da compra?",
        resposta:[
            "📩 Você recebe um e-mail ou notificação no app.",
                "📦 O pedido começa a ser preparado imediatamente.",
                "⏳ Você pode acompanhar o status em tempo real."
        ]
    }
]

    const [produtos, setProdutos] = useState([
        { id: 1, nome: "Hambúrguer Especial", descricao: "Pão artesanal, carne 180g, queijo cheddar, alface e molho especial.", preco: "R$ 19,90", imagem: "../assets/hamburguer.jpg.png" },
         { id: 2, nome: "Batata Frita", descricao: "Batatas fritas douradas e crocantes, perfeitas para acompanhar.", preco: "R$ 9,90", imagem: "../assets/batata.jpg.png" },
        { id: 3, nome: "Milkshake", descricao: "Milkshake cremoso de chocolate ou morango.", preco: "R$ 12,90", imagem: "../assets/milkshake.jpg.png" },
        { id: 4, nome: "Cheeseburguer", descricao: "Hamburguer com carne de qualidade e muito queijo cheddar.", preco: "R$ 22,90", imagem: "../assets/cheeseburguer.png"},
    ]);

      
    



    return(
        <>

        <section className='section-cardapio'>
            <aside>
            <h2>Bem vindo ao nosso</h2>
            <h2><span>Fast Food</span></h2>
            <p>Seja para uma refeição rápida no intervalo do trabalho ou um lanche com os amigos, o <strong>fast-food</strong> é a escolha perfeita para quem busca praticidade sem abrir mão do sabor.</p>
            <a href="#cardapio">Confira nosso Cardápio</a>
            </aside>

            <article>
                <img src='../assets/img-section.png' alt='hamburguer section'/>
            </article>
        </section>

    <main>
                <h2>Aqui o cliente é a prioridade!</h2>
                <section className='section-info'> 
                <div className='info-positivo'>
                <h2>O que o <span>Fast Food</span> oferece para você?</h2>
                <div className='list-positivo'>
                <p>🍔 Variedade de lanches saborosos e preparados na hora.</p>
                <p>⚡ Atendimento rápido para matar sua fome sem demora.</p>
                <p>🚀 Delivery ágil para você saborear no conforto de casa.</p>
                <p>💰 Preços acessíveis e promoções especiais toda semana.</p>
                </div>
                </div>

                <div className='info-negativo'>
                
                <h2>O que <strong>NÃO</strong> oferecemos!</h2>
                <div className='list-negativo'>
                <p>⏳ Longas esperas para receber seu pedido.</p>
                <p>📉 Falta de variedade no cardápio.</p>
                <p>💸 Preços abusivos e sem benefícios.</p>
                <p>🚫 Ingredientes de baixa qualidade.</p>
                </div>
                </div>
                </section>

                


                <section className='guide'>
                       
                        {guias.map((guia)=>(
                            <div key={guia.id} className='guide-question'>
                                
                            <h2 onClick={()=>
                                setAberto(aberto === guia.id ? null : guia.id)
                            }>
                            {guia.pergunta}</h2>
                            <div className='container-arrow'>
                            <img onClick={()=>
                                setAberto(aberto === guia.id ? null : guia.id)
                             }
                            className='arrow' src='/assets/down-arrow.png' />
                            </div>
                            {aberto  === guia.id &&(
                            <div className='container-resposta'>
                          <p className='guide-resposta'>{guia.resposta}</p>
                            </div>
                            
                            )
                            }
                            </div>
                        ))}

                </section>



            <h2>Nosso Cardápio</h2>
            <div className='cardapio' id='cardapio'>
               {produtos.map((produto)=>(
                    <div key={produto.id} className='produto'>
                        <img src={produto.imagem} alt={produto.nome}/>
                        <div className='info-produto'>
                        <h3>{produto.nome}</h3>
                        <p>{produto.descricao}</p>
                        <span>{produto.preco}</span>

                     <div className='buttons'>
                        <button>Comprar</button>
                        <button>
                            <img src='../assets/cart.png'/>
                        </button>
                        </div>

                        </div>

                
                    </div>
               ))}


                </div>
                <div className='div-mais-opcoes'>
                    <a href='#' className='mais-opcoes'>Mais opções</a>
                </div>

    </main>

    {/* <section className='contact'>
               <h3>Entre em contato</h3>
               <span>Rua dos Lanches, 123 Rio de Janeiro</span>
               <span>(21) 12312-1231</span>
               <span>contatofastfood@gmail.com</span>
    </section> */}


    </>

    


    )
}

export default Home;