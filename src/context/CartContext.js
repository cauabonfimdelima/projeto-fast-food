import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){

    const carregarCart = () =>{
        const cart = JSON.parse(localStorage.getItem("@cart") || "[]");
        return cart;
    }

    const [cart, setCart] = useState(carregarCart);

    const salvarCart = () =>{
        localStorage.setItem("@cart", JSON.stringify(cart))
    }

    function removeFromCart(id){
        setCart((cartAtual) => 
            cartAtual.map((item)=>
                item.id === id 
                ? {...item, quantidade: item.quantidade - 1}
                : item
            ).filter(item => item.quantidade > 0)
        );
        }



    function addToCart(item){
        setCart((cart)=>{
            const itemExistente = cart.find((cartItem)=> cartItem.id === item.id);

            if(itemExistente){
                return cart.map((cartItem)=>
                    cartItem.id === item.id
                ? {...cartItem, quantidade: cartItem.quantidade + 1}
                : cartItem
                )
            }else{
                return [...cart, {...item, quantidade: 1}];
            }
    });
    }

    useEffect(()=>{
        salvarCart();
    },[cart])

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}