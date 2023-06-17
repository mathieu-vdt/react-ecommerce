import React, { useEffect, useState } from 'react';
import Card from '../components/card';
import ContainerGrid from '../layout/ContainerGrid';
import { getAllProduct } from '../api/produit';
import HeroHeader from '../layout/hero-header'
import Brands from '../layout/brands'

const Home = () => {
    // const articles = [
    //     { titre: "test", content: "lorem" },
    //     { titre: "test2", content: "lorem2" },
    // ]
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getAllProduct().then(data => {
            setArticles(data)
        })
    }, [])
    
    return (
        <div>
            <HeroHeader />
            <Brands />
            <ContainerGrid>
                {articles.map((elem, key) => <Card key={key} id={elem.id} titre={elem.nom} price={elem.prix} link={`/product/${elem.id}`}/>)}
            </ContainerGrid>
        </div>
    );
}

export default Home;
