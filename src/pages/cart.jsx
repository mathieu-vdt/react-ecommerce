import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCartItems } from '../api/cart';
import OrderCard from '../components/cardOrder';
import { getUserByToken } from '../api/user';
import CardCart from '../components/cardCart';

function CartList() {
  const token = localStorage.getItem('jwtToken');
  const [items, setItems] = useState([]); // État pour stocker les commandes récupérées
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = !!token;
    setIsLoggedIn(loggedIn);

    async function fetchData() {
      try {
        const data = await getCartItems();
        setItems(data); // Met à jour l'état avec les commandes récupérées
      } catch (error) {
        console.error('Erreur lors de la récupération du produit', error);
      }
    }

    if (token) {
      fetchData();
    }
  }, []);

  return (
    <div className='cartList'>
      <h2>Panier</h2>
      <div className="cart-list-items">
        {isLoggedIn ? (
          items.map((elem, key) => (
            <CardCart key={key} id={elem.id} titre={elem.nom} price={elem.prix} quantity={elem.quantity} />
          ))
        ) : (
          <p>Vous devez vous connecter</p>
        )}
      </div>
          <br />
      <div className="center">
        <button className='orderBtn'>Commander</button>
      </div>
    </div>
  );
}

export default CartList;
