import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Gérer la déconnexion de l'utilisateur
    localStorage.removeItem('jwtToken');
    setIsLoggedIn(false); // Mettre à jour l'état pour indiquer la déconnexion
    // Autres actions de déconnexion nécessaires
  };
  
  // Vérifier la connexion lors du chargement initial de la page
  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    const loggedIn = !!jwtToken;
    setIsLoggedIn(loggedIn);

  }, []);


  return (
    <nav>
        <div className="logo"><a href="/">ECOMMERCE</a></div>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            {isLoggedIn ? (
          <>
            <li>
              <Link to="/order">Commandes</Link>
            </li>
            <li>
              <Link onClick={handleLogout}>Déconnexion</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/connexion">Connexion</Link>
          </li>
        )}
        </ul>
    </nav>
  );
};

export default Navbar;
