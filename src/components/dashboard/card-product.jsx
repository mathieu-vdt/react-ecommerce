import React, { useEffect, useState } from 'react';

const CardProduct = ({ id, titre, price, link, quantity }) => {

    const [productQuantity, setProductQuantity] = useState(quantity ?? 0);

    return (
        <div className="item">
                <img src="/src/assets/images/shoes/shirt.png" alt="" />
                <div className="titlePrice">
                    <p className="title">{titre}</p>
                    <p className="price">{price} €</p>
                </div>
                
                <div className="group-btn">
                    <a href={link}>Modifier</a>
                    <a href={link}>
                        <i class="fa-solid fa-trash"></i>
                    </a>
                </div>
        </div>       
    );
}

export default CardProduct;
