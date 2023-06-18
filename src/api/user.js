const token = localStorage.getItem('jwtToken');

export async function getUserLogin(formData) {
    const response = await fetch('http://localhost:3000/api/user/connexion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        Authorization: `Bearer ${token}`,
        body: JSON.stringify(formData)
      });
    const data = await response.json();
  
    return Promise.resolve(data);
}
export async function getUserSignUp(formData) {
    const response = await fetch('http://localhost:3000/api/user/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        Authorization: `Bearer ${token}`,
        body: JSON.stringify(formData)
      });
    const data = await response.json();
  
    return Promise.resolve(data);
}


export async function getUserByToken() {
  const response = await fetch('http://localhost:3000/api/user/info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify()
    });
  const data = await response.json();

  return Promise.resolve(data);
}


export async function changePassword(user_id, password) {

  const response = await fetch(`http://localhost:3000/api/user/change_password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      Authorization: `Bearer ${token}`,
      body: JSON.stringify({
          'user_id': user_id,
          'password': password,
      })
    });
  const data = await response.json();
  
  return Promise.resolve(data);
  
}

export async function deleteUser() {
  const token = localStorage.getItem('jwtToken');
  let userId;
  if(token){
      const UserByToken = getUserByToken();
        await UserByToken.then(result => {
            // Access the result here
            userId = result.id
        
        });

        const response = await fetch(`http://localhost:3000/api/user/delete/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        Authorization: `Bearer ${token}`,
        body: JSON.stringify()
      });
    const data = await response.json();
    
    return Promise.resolve(data);

  }

}