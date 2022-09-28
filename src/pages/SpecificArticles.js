import React from 'react';
import {useStateContext} from '../StateContext';
import { useParams  } from "react-router-dom";
import Header from '../components/Header'
import Article from '../components/Article'
const SpecificArticles = () => {
  const {category} = useParams();
  const {articles} = useStateContext();
  const spArticles = articles.filter(article => article.category === category);

  return(
    <div className="h-screen  w-screen">
      <Header />
      <h1 className="m-auto w-[70%] text-3xl text-gray-900 py-4">Reslut for: <span className="font-bold text-blue-500 ">{category}</span></h1>
      <div className="w-[70%] m-auto">
        {spArticles.map(({_id, author, photoUrl, title, subtitle, image, text, createdAt}) => (
          <Article 
          key={_id}
          id={_id}
          author={author}
          photoUrl={photoUrl}
          title={title}
          subtitle={subtitle}
          image={image}
          text={text}
          timestamp= {createdAt}
          />        
        ))}
      </div>
    </div>
  )
}

export default SpecificArticles