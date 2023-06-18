import React from 'react';
import moment from 'moment';


const OrderCard = ({ order_id, date,status, products }) => {
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
                    <p className='status'>Statut: {status}</p>
                </div>
            </div>
        </div>       
    );
}

export default OrderCard;
