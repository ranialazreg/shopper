// src/context/ShopContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import all_product from '../components/Assets/all_product'; // Ajustez le chemin si nécessaire

export const ShopContext = createContext();

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [allProduct, setAllProduct] = useState([]);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);
    };
     
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
    };
    
    // Calcul du montant total du panier
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    // Calcul du nombre total d'articles dans le panier
    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    };

    useEffect(() => {
        setAllProduct(all_product);
    }, []);

    const addProduct = (product) => {
        setAllProduct((prevProducts) => [...prevProducts, product]);
    };

    console.log(cartItems);

    return (
        <ShopContext.Provider value={{ getTotalCartAmount, getTotalCartItems, allProduct, cartItems, addProduct, addToCart, removeFromCart }}>
            {children}
        </ShopContext.Provider>
    );
};

// Exportation par défaut de ShopContextProvider
export default ShopContextProvider;
