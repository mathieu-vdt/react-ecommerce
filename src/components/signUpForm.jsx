import React, { useState } from 'react';
import { getUserSignUp } from '../api/user';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const formData = {
    email: username,
    motdepasse: password
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    getUserSignUp(formData)
      .then(data => {
        
        alert('Utilisateur créer')
      })
      .catch(error => {
        console.error('Erreur lors de l\'inscription', error);
      });
  };



  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit} method='POST'>
        <div>
          <label htmlFor="username">Nom d'utilisateur:</label>
          <input
            type="mail"
            name='email'
            id="email"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            name='motdepasse'
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default SignUpForm;