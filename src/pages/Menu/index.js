import { useContext, useEffect, useState } from 'react';
import './menu.css'
import { CartContext } from '../../context/CartContext';


function Menu(){

    const {addToCart} = useContext(CartContext);

    const [produtos, setProdutos] = useState([
            { id: 1, nome: "Hambúrguer Especial", descricao: "Pão artesanal, carne 180g, queijo cheddar, alface e molho especial.", preco: "R$ 19,90", imagem: "../assets/hamburguer.jpg.png" },
             { id: 2, nome: "Batata Frita", descricao: "Batatas fritas douradas e crocantes, perfeitas para acompanhar.", preco: "R$ 9,90", imagem: "../assets/batata.jpg.png" },
            { id: 3, nome: "Milkshake", descricao: "Milkshake cremoso de chocolate ou morango.", preco: "R$ 12,90", imagem: "../assets/milkshake.jpg.png" },
            { id: 4, nome: "Cheeseburguer", descricao: "Hamburguer com carne de qualidade e muito queijo cheddar.", preco: "R$ 22,90", imagem: "../assets/cheeseburguer.png"},
            { id: 5, nome: "Sanduíche Vegetariano", descricao: "Pão integral, legumes grelhados, queijo, e molho de mostarda e mel.", preco: "R$ 17,90", imagem: "../assets/sanduiche_vegetariano.png" },
            { id: 6, nome: "Salada Caesar", descricao: "Alface, frango grelhado, croûtons, queijo parmesão e molho caesar.", preco: "R$ 14,90", imagem: "../assets/salada_caesar.png" },
            { id: 7, nome: "Hot Dog", descricao: "Salsicha artesanal, pão macio, ketchup, mostarda e molho de cebola caramelizada.", preco: "R$ 10,90", imagem: "../assets/hotdog.png" },
            { id: 8, nome: "Pizza Margherita", descricao: "Massa fina, molho de tomate, queijo mussarela, manjericão e azeite de oliva.", preco: "R$ 29,90", imagem: "../assets/pizza_margherita.png" },
            { id: 9, nome: "Tacos", descricao: "Tortilhas crocantes recheadas com carne moída, queijo, alface e molho picante.", preco: "R$ 15,90", imagem: "../assets/tacos.png" },
            { id: 10, nome: "Fritas com Queijo", descricao: "Batatas fritas cobertas com queijo cheddar derretido e bacon crocante.", preco: "R$ 12,90", imagem: "../assets/fritas_com_queijo.png" },
        ]);
        

    return(

        <section className="section-menu">
        <h3>Confira nosso cardápio completo!</h3>
        <div className="menu">
          {produtos.map((produto) => (
            <div key={produto.id} className="produto">
              <img src={produto.imagem} alt={produto.nome} />
              <div className="info-produto">
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <span>{produto.preco}</span>
  
                <div className="buttons">
                  {/* <button>Comprar</button> */}
                  <button onClick={() => addToCart(produto)}>
                    Adicionar ao carrinho
                    {/* <img src="../assets/cart.png" alt="Adicionar ao carrinho" /> */}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

export default Menu;