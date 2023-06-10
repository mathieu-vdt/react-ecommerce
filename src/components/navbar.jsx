import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    state = {
      menuToggle: false
    }

  render() {
    return (
        <div>
            <nav>
            <div className="logoNavbar">
                <p>LOGO</p>
            </div>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/connexion">Connexion</a></li>
                    <li><a href="/connexion">Commandes</a></li>
                    <li><a href="/connexion">Connexion</a></li>
                </ul>
            </nav>
        </div>
    );
    }
}

export default Navbar;