import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/Item/Item';

const ShopCategory = (props) => {
    const { allProduct } = useContext(ShopContext);
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className='shop-category'>
            <img src={props.banner} alt="Category Banner" className="shopcategory-banner" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12 </span> out of 36 products 
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="Dropdown Icon" />
                </div>
            </div>
            <div className="shopcategory-products">
                {allProduct && allProduct.map((product, i) => {
                    if (props.category === product.category) {
                        return (
                            <div key={i} onClick={() => handleProductClick(product.id)}>
                                <Item
                                    id={product.id}
                                    name={product.name}
                                    image={product.image}
                                    new_price={product.new_price}
                                    old_price={product.old_price}
                                />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
};

export default ShopCategory;
