import React from 'react';

const Card = ({ titre, price, link }) => {
    return (
        <div className="item">
                <img src="/src/assets/images/shoes/shirt.png" alt="" />
                <div className="titlePrice">
                    <p className="title">{titre}</p>
                    <p className="price">{price} €</p>
                </div>
                
                <div className="group-btn">
                    <a href={link}>Détails</a>
                    <a><i className="fa-sharp fa-solid fa-basket-shopping"></i></a>
                </div>
        </div>       
    );
}

export default Card;
