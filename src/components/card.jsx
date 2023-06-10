import React from 'react';

const Card = ({ titre, content, link }) => {
    return (
        <article className="card">
            <h3>{titre}</h3>
            <p>{content}</p>
            <a href={link}>Voir détail</a><br />
            <p></p>
        </article>
    );
}

export default Card;
