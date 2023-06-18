import React, { useState } from 'react';
import moment from 'moment';
import { changeStatus } from '../../api/order'
const OrderCard = ({ order_id, date, status, products }) => {
  const [orderStatus, setOrderStatus] = useState(status);

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    setOrderStatus(newStatus);
    
    const response = await changeStatus(order_id, newStatus);
  };

  return (
    <div className="itemOrder">
      <div className='order-card'>
        <div className="order-card-header">
          <p>Reference : {order_id}</p>
          <p className='date'>Le {moment(date).format('DD/MM/YYYY')} à {moment(date).format('hh:mm')}</p>
        </div>
        <div className='order-card-body'>
          <table className='tableOrder' cellSpacing="0">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prix</th>
                <th>Quantité</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr id={product.is}>
                  <td>{product.nom}</td>
                  <td>{product.prix} €</td>
                  <td>{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className='status'>Statut:
            <select value={orderStatus} onChange={handleStatusChange}>
              <option value="Validé">Validé</option>
              <option value="Payé">Payé</option>
              <option value="Livré">Livré</option>
              <option value="Annulé">Annulé</option>
            </select>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
