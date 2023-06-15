import { getUserByToken } from '../api/user';

const token = localStorage.getItem('jwtToken');
let userId = 3;
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
