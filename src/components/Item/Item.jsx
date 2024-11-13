import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, image, name, new_price, old_price }) => {
    return (
        <div className="item">
            <Link to={`/product/${id}`}>
                <img onClick={window.scrollTo(0,0)} src={image || "default_image.png"} alt={name || "Produit"} />
            </Link>
            <p>{name || "Nom du produit"}</p>
            <div className="item-prices">
                <div className="item-price-new">§{new_price || "0.00"}</div>
                <div className="item-price-old">§{old_price || "0.00"}</div>
            </div>
        </div>
    );
};

export default Item;
