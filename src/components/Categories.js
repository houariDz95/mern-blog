import React from 'react'
import {Link} from 'react-router-dom'
const categories = ['photography', 'education', 'sport', 'astronomy', 'web-development']

const Categories = ({container, span, setShowMenu, showMenu, link, title}) => {  
  return (
    <div className={container}>
      {title && <h1 className="font-bold text-normal pb-4">{title}</h1>}
      {categories.map((category, index) => (
        <Link className={link} to={`/specific-articles/${categories[index]}`}  key={index}>
          <span className={span} >{category}</span>
        </Link>
      ))}
    </div>  
  )
}

export default Categories