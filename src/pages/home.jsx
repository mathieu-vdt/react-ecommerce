import React, { useEffect, useState } from 'react';
import Card from '../components/card';
import ContainerGrid from '../layout/ContainerGrid';
import { getAllProduct,getAllProductByUser } from '../api/produit';
import HeroHeader from '../layout/hero-header'
import Brands from '../layout/brands'

const Home = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if(token){
            getAllProductByUser().then(data => {
                setArticles(data)
            })
        }else{
            getAllProduct().then(data => {
                setArticles(data)
            })
        }
    }, [])
    
    return (
        <div>
            <HeroHeader />
            <Brands />
            <ContainerGrid>
                {articles.map((elem, key) => <Card key={key} id={elem.id} titre={elem.nom} price={elem.prix} quantity={elem.quantity} link={`/product/${elem.id}`}/>)}
            </ContainerGrid>
        </div>
    );
}

export default Home;
