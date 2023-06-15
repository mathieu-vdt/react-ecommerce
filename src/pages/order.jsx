import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderByUser } from '../api/order';
import OrderCard from '../components/cardOrder';

function OrderList() {
  const [orders, setOrders] = useState([]); // État pour stocker les commandes récupérées

  useEffect(() => {
    getOrderByUser()
      .then(data => {
        setOrders(data); // Met à jour l'état avec les commandes récupérées
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du produit', error);
      });
  }, []);

  return (
    <div className='orderList'>
      <h2>Liste des commandes :</h2>
      {orders.map((elem, key) => <OrderCard key={key} order_id={elem.commande_id} date={elem.date} products={elem.produits}/>)}
    </div>
  );
}

export default OrderList;