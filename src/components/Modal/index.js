import { useContext } from 'react';
import './modal.css';
import { CartContext } from '../../context/CartContext';

function Modal({ close }) {
    const { cart, removeFromCart } = useContext(CartContext);

    function Comprar(){
        const inputEndereco = document.querySelector(".input-endereco")

        if (inputEndereco.value ===""){
            alert("Insira um endereço")
            return;
        }

        const cartItems = cart.map((item)=>{
            return(
                `${item.nome} - Quantidade: (${item.quantidade}) - Preço : ${item.preco} |`

            )
        }).join("")    

        const message = encodeURIComponent(cartItems)
        const phone = "5521979697575"

        const endereco = encodeURIComponent(inputEndereco.value.trim());
        window.open(`https://wa.me/${phone}?text=${message} Endereço: ${inputEndereco.value}`, "_blank")

        console.log(cartItems)
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Carrinho de Compras</h3>

                {/* Botão para fechar o modal */}
                <button className="close-modal" onClick={close}>X</button>

                {cart.length > 0 ? (
                    cart.map((item) => {
                        const precoUnitario = parseFloat(item.preco.replace("R$", "").replace(",", "."));
                        const precoTotal = item.quantidade * precoUnitario;

                        return (
                            <div key={item.id} className="cart-item">
                                <img src={item.imagem} alt={item.nome} />
                                <p>{item.nome}</p>
                                <p>Quantidade: {item.quantidade}</p>
                                <p><strong>Total: R$ {precoTotal.toFixed(2).replace(".", ",")}</strong></p>
                                <div className="cart-item-button">
                                <button onClick={()=>
                                removeFromCart(item.id)
                                }>Remover</button>    
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>Carrinho vazio</p>
                )}
                <div className='input-cart'>
                    <label>Endereço de Entrega:</label>
                    <input className='input-endereco' placeholder='Digite seu endereço' required/>
                </div>
                <div className="buttons-cart">
                    <button className='button-comprar' onClick={Comprar}>Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;