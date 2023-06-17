import React from 'react';

const CardCart = ({ id, titre, price, quantity }) => {

    return (
        <div className="itemCart">
            <div className="cart-image-item">
                <img src="/src/assets/images/shoes/shirt.png" alt="" />
                <p className="title">{titre}</p>
            </div>
            <p className="price"> Prix: {price} €</p>
            <p className="price"> Quantité: {quantity}</p>
        </div>       
    );
}

export default CardCart;