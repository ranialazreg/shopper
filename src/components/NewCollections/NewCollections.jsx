import React from 'react';
import './NewCollections.css';
import new_collection from '../Assets/new_collections'; // Assurez-vous que ce fichier exporte un tableau d'objets
import Item from '../Item/Item'; // Importez le composant Item pour afficher chaque élément de la collection

const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h1>New Collections</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i) => (
                    <Item
                        key={i} 
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewCollections;
