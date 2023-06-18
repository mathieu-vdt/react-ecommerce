import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCartItems } from '../api/cart';
import { createOrder } from '../api/order';
import OrderCard from '../components/cardOrder';
import { getUserByToken } from '../api/user';
import CardCart from '../components/cardCart';
import { removeCartItem } from '../api/cart';

function CartList() {
  const token = localStorage.getItem('jwtToken');
  const [items, setItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [orderId, setOrderId] = useState(null); // Nouvel état pour stocker l'ID de la commande

  useEffect(() => {
    const loggedIn = !!token;
    setIsLoggedIn(loggedIn);

    async function fetchData() {
      try {
        const data = await getCartItems();
        setItems(data);
      } catch (error) {
        console.error('Erreur lors de la récupération du produit', error);
      }
    }

    if (token) {
      fetchData();
    }
  }, []);

  // Fonction pour créer la commande
  const handleCreateOrder = async () => {
    try {
      const user = await getUserByToken(token);
      const userId = user.id;
      const products = items.map(item => ({ id: item.product_id, quantity: item.quantity }));
      const result = await createOrder(userId, products);

      // Met à jour l'état avec l'ID de la commande créée
      setOrderId(result.order_id);

      window.location.replace('/');
    } catch (error) {
      console.error('Erreur lors de la création de la commande', error);
    }
  };

  const removeItem = async (cart_id, product_id) => {
    try {
      const response = await removeCartItem(cart_id, product_id);
      console.log(response);

      if (response.success) {
        // Suppression réussie, met à jour l'état des éléments du panier en excluant l'élément supprimé
        const updatedItems = items.filter(item => item.product_id !== product_id);
        setItems(updatedItems);
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'élément du panier', error);
    }
  };

  return (
    <div className='cartList'>
      <h2>Panier</h2>
      <div className="cart-list-items">
        {isLoggedIn ? (
          items.map((elem, key) => (
            <CardCart key={key} id={elem.id} titre={elem.nom} price={elem.prix} quantity={elem.quantity} cart_id={elem.cart_id} product_id={elem.product_id} removeItem={removeItem}/>
          ))
        ) : (
          <p>Vous devez vous connecter</p>
        )}
      </div>
      <br />
      {orderId ? (
        <p>Commande créée avec succès. ID de la commande : {orderId}</p>
      ) : (
        <div className="center">
          <button className='orderBtn' onClick={handleCreateOrder}>
            Commander
          </button>
        </div>
      )}
    </div>
  );
}

export default CartList;
