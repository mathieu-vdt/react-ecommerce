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
    <div>
      <h2>Détails du produit {id}</h2>
      <h3>{product.nom}</h3>
      <p>{product.description}</p>
      <p>{product.prix}</p>
      {/* ... */}
    </div>
  );
}

export default ProductDetail;