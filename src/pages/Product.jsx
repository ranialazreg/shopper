import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
    const { allProduct } = useContext(ShopContext);
    const { productId } = useParams();
    const product = allProduct?.find((e) => e.id === Number(productId));

    if (!product) {
        return <p>Produit non trouvé. Veuillez vérifier l'ID du produit.</p>;
    }

    return (
        <div>
        

            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    );
};

export default Product;
