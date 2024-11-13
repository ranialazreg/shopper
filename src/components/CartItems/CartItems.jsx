import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalCartAmount,allProduct, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {allProduct.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id} className="cartitems-format">
                            <img src={product.image} alt={product.name} className='carticon-product-icon' />
                            <p>{product.name}</p>
                            <p>§{product.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[product.id]}</button>
                            <p>§{(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                            <img 
                                src={remove_icon} 
                                onClick={() => removeFromCart(product.id)} 
                                alt="Remove item" 
                                className='cart-remove-icon'
                            />
                        </div>
                    );
                }
                return null;
            })}
            
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Substotal</p>
                            <p>§{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>§{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    
    );
};

export default CartItems;
