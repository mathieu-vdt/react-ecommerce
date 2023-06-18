import React from 'react';
import { removeCartItem } from '../api/cart';

const CardCart = ({ id, titre, price, quantity, cart_id, product_id, removeItem }) => {

    // Fonction pour créer la commande
    const handleRemoveItem = async () => {
      try {
        const response = await removeItem(cart_id, product_id);
      } catch (error) {
        console.error('Erreur lors de la suppression de l\'élément du panier', error);
      }
    };

    return (
        <div className="itemCart">
            <div className="cart-image-item">
                <img src="/src/assets/images/shoes/shirt.png" alt="" />
                <p className="title">{titre}</p>
            </div>
            <p className="price"> Prix: {price} €</p>
            <p className="price"> Quantité: {quantity}</p>
            <button className="deleteItemCart" onClick={handleRemoveItem}><i className="fa-solid fa-trash"></i></button>
        </div>       
    );
}

export default CardCart;