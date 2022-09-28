import {useNavigate} from 'react-router-dom';
import { AiFillSchedule} from 'react-icons/ai';

const Article = ({id, author, photoUrl, title, subtitle, image, text, timestamp, profile}) => {
  const date = new Date(timestamp)
  const navigate = useNavigate();
  return (
    <div className="p-6 text-center bg-white shadow-lg rounded-lg mb-5">
      <div className="w-full  m-auto"> 
        <img className="w-full h-[300px] rounded-lg" src={image} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mt-3">
        <h1 className="text-black text-xl font-semibold">{title}</h1>
        <h1 className="text-gray-500 text-lg font-normal ">{subtitle && subtitle}</h1>
      </div>
      <div className="flex justify-center items-center gap-10 text-gray-400 mt-3"> 
        <div className="flex items-center">
          <img height={40} width={40} className="rounded-full mr-2" src={photoUrl} alt="user" />
          <p>{author}</p>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-xl text-red-400"><AiFillSchedule /></span>
          <p>{profile ? '' : date.toDateString()}</p>
        </div>
      </div>
      <div className="w-[80%] m-auto mt-3 text-gray-500">
        <p>{!profile ? text.slice(0, 200): text.slice(0, 100)}...</p>
      </div>
      <div className="mt-3">
        <button
        onClick={() => navigate(`/post/${id}`)}
        className="px-8 py-4 rounded-full bg-red-500 text-white text-lg font-bold">Continue Reading</button>
      </div>
    </div>
  )
}

export default Article