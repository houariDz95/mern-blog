import React from 'react'
import { useStateContext } from '../StateContext'
import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin} from 'react-icons/ai'
const PostDetails = () => {
  const {articles} = useStateContext();
  const {id} = useParams();
  const articleDetails = articles.filter(article => article._id === id);
  const date = new Date(articleDetails[0].createdAt)

  return (
    <div className="h-[100%] w-screen">
      <Header />
      <div className="w-[70%] m-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <img src={articleDetails[0].photoUrl} alt='' height={80} width={80} className="rounded-full"/>
            <div className="flex flex-col lg:gap-5">
              <h1>{articleDetails[0].author}</h1>
              <p className="text-gray-500">{date.toDateString()}</p>
            </div>
          </div>
          <div className="flex items-center lg:gap-4 md:gap-4 gap-2 text-gray-500 ">
            <button>
              <AiFillFacebook fontSize={25}/>
            </button>
            <button>
              <AiFillInstagram fontSize={25} />
            </button>
            <button>
              <AiFillTwitterSquare fontSize={25}/>
            </button>
            <buton>
              <AiFillLinkedin fontSize={25} />
            </buton>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="font-bold text-3xl text-center">{articleDetails[0].title}</h1>
          <h2 className="font-semibold text-xl text-center text-gray-800 my-4">{articleDetails[0].subtitle}</h2>
          <img src={articleDetails[0].image} alt="" width={500} height={350} className="mb-4 m-auto"/>
          <p className="font-semibold">{articleDetails[0].text}</p>
      </div>
      </div>
    </div>
  )
}

export default PostDetails