import React, { useEffect, useState } from 'react';
import Card from '../components/card';
import ContainerFlex from '../layout/containerFlex';
import { getAllProduct } from '../api/produit';

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
            <ContainerFlex>
                {articles.map((elem, key) => <Card key={key} titre={elem.nom} content={elem.description} link={`/product/${elem.id}`}/>)}
            </ContainerFlex>
        </div>
    );
}

export default Home;
