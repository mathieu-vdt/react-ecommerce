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

export async function getAllProduct() {
    const response = await fetch('http://localhost:3000/api/product/')
    const data = await response.json()

    return Promise.resolve(data)

}

export async function getAllProductByUser() {
    const response = await fetch(`http://localhost:3000/api/product/ByUserId/${userId}`)
    const data = await response.json()

    return Promise.resolve(data)

}

export async function getProductById(productId) {
    const response = await fetch(`http://localhost:3000/api/product/${productId}`);
    const data = await response.json();
  
    return Promise.resolve(data);
}
