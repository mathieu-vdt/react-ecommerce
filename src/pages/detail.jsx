import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/produit';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du produit', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='productDetail'>
      <div className="grid">
        <div className="grid-item">
          <img src="/src/assets/images/shoes/shirt.png" alt="" />
        </div>
        <div className="grid-item">
          <h3>{product.nom}</h3>
          <hr />
          <p className='descriptionDetail'>{product.description}</p>
          <hr />
          <p>Prix : {product.prix} €</p>
          <div className="group-btn">
            <a href='#'>Commander</a>
            <a><i className="fa-sharp fa-solid fa-basket-shopping"></i></a>
          </div>
        </div>
        <hr />
        <div className="notice">
          
        </div>
      </div>
      {/* ... */}
    </div>
  );
}

export default ProductDetail;