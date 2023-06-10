import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            Erreur 404
            Page non trouvé !
            <Link to="/">Retour à l'accueil</Link>
        </div>
    );
}

export default Error404;
