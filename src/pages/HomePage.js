import React,{ Component } from 'react';
import Article from '../components/Article'

const articles = [
    {
        id:1,
        title:"Use Numbers",
        author:"Jan Kowal",
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi sint sed, fuga tenetur quis explicabo? Quaerat, voluptatem omnis. Distinctio nulla labore eum odit ratione consectetur officiis temporibus voluptas ex? Libero.'
    },
    {
        id:2,
        title:"Change The Reader's Life",
        author:"Adam Kowal",
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi sint sed, fuga tenetur quis explicabo? Quaerat, voluptatem omnis. Distinctio nulla labore eum odit ratione consectetur officiis temporibus voluptas ex? Libero.'
    },
    {
        id:3,
        title:"Make a Prediction",
        author:"Ania Kowal",
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi sint sed, fuga tenetur quis explicabo? Quaerat, voluptatem omnis. Distinctio nulla labore eum odit ratione consectetur officiis temporibus voluptas ex? Libero.'
    }
]

const HomePage = () => {
    const artList = articles.map(articles => (
        <Article key={articles.id} {...articles}/>
    ))
        return ( 
            <div className="home">
            {artList}
            </div>
         );
}
 
export default HomePage;