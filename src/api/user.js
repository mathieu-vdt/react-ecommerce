export async function getUserLogin(formData) {
    const response = await fetch('http://localhost:3000/api/user/connexion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2ODYyOTY2OTJ9.6TNlD5UIwYSfi_Nt9o48jEQqOdVyocJ6TXlZuJYj47M',
        body: JSON.stringify(formData)
      });
    const data = await response.json();
  
    console.log(data);
    return Promise.resolve(data);
}