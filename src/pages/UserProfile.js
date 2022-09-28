import { useStateContext } from '../StateContext';
import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import Article from '../components/Article'

const UserProfile = () => {
  const { articles, users } = useStateContext();
  const { id } = useParams();
  const profile = users.filter(user => user._id === id);
  const userArticles = articles.filter(article => article.author === profile[0]?.userName);
  return (
    <div className="h-[100%] w-screen">
      <Header />
      <div className="w-[70%] m-auto">
        <div className="flex jsutify-right gap-[15px] mb-5 border-b-[1px] ">
          <img heigt={120} width={120} className="rounded-full " src={profile[0]?.photoUrl} alt="" />
          <div>
            <h1 className="text-xl font-bold text-gray-900 pt-2">{profile[0]?.userName}</h1>
            <p className="text-base font-semibold text-gray-800 pb-2">email: {profile[0]?.email}</p>
          </div>
        </div>
        <h1 className="text-xl font-semibold text-black">{profile[0]?.userName}'s Articles:<span className="text-blue-500">({userArticles.length})</span></h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-4 mt-5">
          {userArticles.map(({ _id, author, photoUrl, title, image, text, createdAt }) => (
            <Article
              profile
              key={_id}
              id={_id}
              author={author}
              photoUrl={photoUrl}
              title={title}
              image={image}
              text={text}
              timestamp={createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserProfile