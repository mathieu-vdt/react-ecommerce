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