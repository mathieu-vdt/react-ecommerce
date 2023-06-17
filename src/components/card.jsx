import React, { useEffect, useState } from 'react';
import { addCartItem } from '../api/cart';

const Card = ({ id, titre, price, link, quantity }) => {

    const [productQuantity, setProductQuantity] = useState(quantity ?? 0);

    const handleAddCartItem = async () => {
        await addCartItem(id, 1);

        // Incrémenter la quantité du produit
        setProductQuantity(prevQuantity => prevQuantity + 1);
    };

    return (
        <div className="item">
                <img src="/src/assets/images/shoes/shirt.png" alt="" />
                <div className="titlePrice">
                    <p className="title">{titre}</p>
                    <p className="price">{price} €</p>
                </div>
                
                <div className="group-btn">
                    <a href={link}>Détails</a>
                    <a onClick={handleAddCartItem}>
                        <i className="fa-sharp fa-solid fa-basket-shopping"></i>
                        <span className='cart-number'>{productQuantity}</span>
                    </a>
                </div>
        </div>       
    );
}

export default Card;
