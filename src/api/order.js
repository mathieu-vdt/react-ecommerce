import { getUserByToken } from '../api/user';

const token = localStorage.getItem('jwtToken');
let userId;
if(token){
    const UserByToken = getUserByToken();
    UserByToken.then(result => {
        // Access the result here
        userId = result.id
    
    });

}


export async function getOrderByUser() {
    const response = await fetch(`http://localhost:3000/api/order/${userId}`)
    const data = await response.json()

    return Promise.resolve(data)

}

export async function getAllOrder() {
    const response = await fetch(`http://localhost:3000/api/order/`)
    const data = await response.json()

    return Promise.resolve(data)

}

export async function createOrder(userId, products) {

    const response = await fetch(`http://localhost:3000/api/order/create_order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        Authorization: `Bearer ${token}`,
        body: JSON.stringify({
            'user_id': userId,
            'products': products,
        })
      });
    const data = await response.json();
    
    return Promise.resolve(data);
    
}

export async function changeStatus(order_id, status) {

    const response = await fetch(`http://localhost:3000/api/order/change_status`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        Authorization: `Bearer ${token}`,
        body: JSON.stringify({
            'order_id': order_id,
            'status': status,
        })
      });
    const data = await response.json();
    
    return Promise.resolve(data);
    
}
