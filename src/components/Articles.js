import Article from './Article'
import {useStateContext} from '../StateContext';
const Articles = () => {

  const {articles} = useStateContext();
  return (
    <div className="flex-1">
      {articles.map(({_id, author, photoUrl, title, subtitle, image, text, createdAt}) => (
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
  )
}

export default Articles