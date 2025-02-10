import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){
    const [cart, setCart] = useState([]);

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

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}