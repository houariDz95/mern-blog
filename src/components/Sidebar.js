import React from 'react'
import Categories from './Categories';
import  {useAuthState} from 'react-firebase-hooks/auth';
import { AiOutlineCloseCircle} from 'react-icons/ai';
import {auth } from '../firebase';
import {FcGoogle} from 'react-icons/fc';
import { signOut } from 'firebase/auth';

const Sidebar = ({signIn, container, span, setShowMenu, link, createPost}) => {
  const [user] = useAuthState(auth);
  return (
    <div className="fixed top-0 left-0 w-[70%] bg-white h-screen">
      <button className="absolute left-1 top-1" onClick={() => setShowMenu(false)}><AiOutlineCloseCircle fontSize={25}/></button>
        {user ? (
          <>
            <div className='flex w-full justify-right gap-4 mt-10'>
              <img 
              onClick={() => signOut(auth)}
              src={user?.photoURL} 
              height={80} 
              width={80} 
              className="rounded-full" 
              alt="" />
              <div>
                <h1 className="text-xl text-semibold text-gray-900">{user?.displayName}</h1>
                  <p className="text-lg text-gray-500">{user?.email}</p>
                </div>
            </div>
            <div className='w-[95%] m-auto mt-4'>
                  <button 
                  onClick={createPost}
                  className="w-full bg-blue-500 text-white py-1 rounded-full">Create Post</button>      
            </div>
          </>
        ) : (
          <div className="w-[95%] m-auto"> 
          <button 
          onClick={signIn}
          className="mt-10 w-full flex items-center justify-center py-1  rounded-full bg-transparent border-[1px] border-black hover:bg-gray-300">
            <FcGoogle /> Sign In With Google
          </button>
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold mt-2">Categories:</h1>
          <Categories container={container} span={span} link={link} />
        </div>
    </div>
  )
}

export default Sidebar