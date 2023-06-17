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
            <li><Link to="/"><i className="fa-solid fa-house"></i></Link></li>
            {isLoggedIn ? (
          <>
            <li>
              <div className="dropdown">
                <span><i className="fa-solid fa-user"></i></span>
                <div className="dropdown-content">
                  <Link to="/order"><i className="fa-solid fa-clipboard-list"></i>  Commandes</Link>
                  <Link onClick={handleLogout}><i className="fa-sharp fa-solid fa-right-from-bracket"></i>  Déconnexion</Link>
                </div>
              </div>
            </li>
          </>
        ) : ( 
          <li>
          <div className="dropdown">
            <span><i className="fa-solid fa-user"></i></span>
            <div className="dropdown-content">
              <Link to="/connexion">Se connecter</Link>
            </div>
          </div>
        </li>
        )}
        
            <li>
              <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;
