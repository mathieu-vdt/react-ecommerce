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


export async function getCartIdByUser() {
    const response = await fetch(`http://localhost:3000/api/cart/cart_id/${userId}`)
    const data = await response.json()

    return Promise.resolve(data)

}


export async function getCartItems() {
    const response = await fetch(`http://localhost:3000/api/cart/${userId}`);
    const data = await response.json();
  
    return Promise.resolve(data);
}

export async function addCartItem(product_id, quantity) {
    
    let cart_id = 0;
    const cartData = await getCartIdByUser();
    cart_id = cartData.id;

    const response = await fetch(`http://localhost:3000/api/cart/add/cart_item`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        Authorization: `Bearer ${token}`,
        body: JSON.stringify({
            'cart_id': cart_id,
            'product_id': product_id,
            'quantity': quantity
        })
      });
    const data = await response.json();
    
    return Promise.resolve(data);
    
}
