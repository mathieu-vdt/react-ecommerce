import React from 'react';

const ContainerGrid = ({ children }) => {
    return (
        <div className="container-grid">
        <div className="title-grid">
            <h2>Products</h2>
            <a href="#">View all</a>
        </div>
        <br />
        <div className="grid-container">
            {children}
        </div>
    </div>
    );
}

export default ContainerGrid;