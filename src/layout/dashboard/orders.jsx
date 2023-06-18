import React, { useEffect, useState } from 'react';
import { getAllOrder } from '../../api/order';
import OrderCard from '../../components/dashboard/card-order';

const DashboardOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(''); // State to store the selected status

  useEffect(() => {
    getAllOrder().then(data => {
      setOrders(data);
    });
    
  }, []);

  // Filter orders by selected status
  const filteredOrders = orders.filter(order =>
    selectedStatus ? order.status === selectedStatus : true
  );

  // Handle select change event
  const handleSelectChange = event => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div className='orderList'>
      <h2>Liste des commandes :</h2>
      <div>
        <label htmlFor="statusFilter">Filtrer par statut:</label>
        <select id="statusFilter" value={selectedStatus} onChange={handleSelectChange}>
          <option value="">Tous les statuts</option>
          <option value="Validé">Validé</option>
          <option value="Payé">Payé</option>
          <option value="Livré">Livré</option>
          <option value="Annulé">Annulé</option>
        </select>
      </div>
      {filteredOrders.map((elem, key) => (
        <OrderCard
          key={key}
          order_id={elem.commande_id}
          date={elem.date}
          status={elem.status}
          products={elem.produits}
        />
      ))}
    </div>
  );
};

export default DashboardOrders;
