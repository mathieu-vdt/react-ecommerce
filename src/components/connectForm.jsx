import React, { useState } from 'react';
import { getUserLogin } from '../api/user';
import { Link } from 'react-router-dom';

function ConnectForm() {
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

    getUserLogin(formData)
      .then(data => {
        
        // Traitez les données de connexion utilisateur ici
        switch(data.mess){
            case 'utilisateur connecté':
                // Stockage du token JWT dans le stockage local
                localStorage.setItem('jwtToken', data.token);
                window.location.replace('/');
                break;
            default:
                alert('Erreur de connexion')
                break;
        }
      })
      .catch(error => {
        console.error('Erreur lors de la connexion', error);
      });
  };



  return (
    <div>
      <h2>Connexion</h2>
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
        <div className="form-grid">
          <Link to="/inscription">Pas encore inscrit ?</Link>
          <button type="submit">Se connecter</button>
        </div>
      </form>

      
    </div>
  );
}

export default ConnectForm;