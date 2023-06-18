import React from 'react';
import { Link } from 'react-router-dom';

const NavButtons = () => {
    return (
        <div className="btn-list">
            <a href="/dashboard/products">Produits</a>
            <a href="/dashboard/orders">Commandes</a>
            <a href="/dashboard/users">Utilisateurs</a>
        </div>
    );
}

export default NavButtons;