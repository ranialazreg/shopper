// ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, image, name, new_price, old_price }) => {
    // Fonction pour faire défiler vers le haut
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="product-card">
            <Link to={`/product/${id}`} onClick={scrollToTop}>
                {/* Utilisation d'une image par défaut si `image` est manquante */}
                <img 
                    src={image || `${process.env.PUBLIC_URL}/images/default_image.png`} 
                    alt={name || "Produit"} 
                    className="product-card-image"
                />
            </Link>
            <p>{name || "Nom du produit"}</p>
            <div className="product-card-prices">
                <div className="product-price-new">§{new_price || "0.00"}</div>
                <div className="product-price-old">§{old_price || "0.00"}</div>
            </div>
        </div>
    );
};

export default ProductCard;
