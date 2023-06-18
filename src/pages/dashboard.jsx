import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderByUser } from '../api/order';
import NavButtons from '../components/dashboard/navbtn'
import OrderCard from '../components/cardOrder';


function Dashboard() {
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
    <div className='dashboard'>
      <h2>Tableau de bord</h2>
      <NavButtons />
    </div>
  );
}

export default Dashboard;