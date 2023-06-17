import React from 'react';

const CardCart = ({ id, titre, price, quantity }) => {

    return (
        <div className="itemCart">
            <p className="title">{titre}</p>
            <p className="price">{price} €</p>
            <p className="price">{quantity} €</p>
        </div>       
    );
}

export default CardCart;