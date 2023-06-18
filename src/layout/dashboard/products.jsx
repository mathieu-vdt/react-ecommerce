import React, { useEffect, useState } from 'react';
import CardProduct from '../../components/dashboard/card-product';
import ContainerGrid from '../../layout/ContainerGrid';
import { getAllProduct,getAllProductByUser } from '../../api/produit';
import HeroHeader from '../../layout/hero-header'
import Brands from '../../layout/brands'
import NavButtons from '../../components/dashboard/navbtn'

const DashboardProducts = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getAllProduct().then(data => {
                setArticles(data)
        })
    }, [])
    
    return (
        <div className='dashboard'>
            <NavButtons />
            <ContainerGrid>
                {articles.map((elem, key) => <CardProduct key={key} id={elem.id} titre={elem.nom} price={elem.prix} quantity={elem.quantity} link={`/product/${elem.id}`}/>)}
            </ContainerGrid>
        </div>
    );
}

export default DashboardProducts;
