import React, { useState } from 'react'
import  {useNavigate} from 'react-router-dom';
import Categories from './Categories';
import Sidebar from './Sidebar';
import {Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
import { signInWithPopup, signOut } from 'firebase/auth';
import { provider, auth } from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useStateContext } from '../StateContext'
import axios from 'axios';

const styles = {
  container: `lg:relative flex w-[70%] justify-between items-center m-auto p-4`,
  logo: `text-xl font-bold p-5 px-0 text-blue-500`,
  containerLg: `p-5 lg:flex hidden flex-1 justify-center gap-5 text-normal  font-semibold `, 
  spanLg: `hover:text-gray-400 w-[100px]`,
  nav: `lg:hidden absolute right-[15%]`,
  containerSm: `w-full flex flex-col justify-start mt-1 gap-4`,
  spanSm: `hover:bg-gray-200 flex  h-full p-2`,
  signUpButton: `hidden lg:flex items-center lg:absolute right-[-35px] top-[32%] px-4 py-1 rounded-full
   bg-transparent border-[1px] border-black hover:bg-gray-300`,
  createPostButton: `hidden lg:block absolute lg:right-[-4%]  lg:top-[30%] px-5 py-2 rounded-full text-white bg-blue-500`,
  link: `w-full h-full`,
  info: `absolute right-[-10%] top-[30%] lg:flex hidden flex-col justify-center items-center w-[50px]`,
}

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const {users} = useStateContext()

  const signIn = () => {
      signInWithPopup(auth, provider).then(async (result) => {
        const foundUser = users?.find(item => item?.email === result?.user?.email)
        if(result && !users.includes(foundUser)){
          await axios.post('https://houedd-blog.herokuapp.com/v1/users', {
            userName: result?.user?.displayName,
            email: result?.user?.email,
            photoUrl: result?.user?.photoURL,
            })    
        } 
      })
  }
  const createPost = () => {
    navigate('/edit');
  }
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>DevEdd</Link>
      <Categories container={styles.containerLg} span={styles.spanLg} setShowMenu={setShowMenu}/>
      <div className={styles.nav}>
        <AiOutlineMenu fontSize={25} onClick={() => setShowMenu(true)}  />
        {showMenu && ( <Sidebar 
        container={styles.containerSm} 
        span={styles.spanSm} 
        link={styles.link} 
        setShowMenu={setShowMenu} 
        createPost={createPost}
        signIn={signIn}
        showMenu/>)}
      </div>
      {user?
      (
        <div>
          <button className={styles.createPostButton} onClick={createPost}>Create Post</button>
            <div className={styles.info}>
              <img 
              src={user?.photoURL}
              height={40} width={40} 
              className="rounded-full cursor-pointer"
              alt=""
              onClick={() => signOut(auth)}
              />
              <p className="text-gray-900 font-bold text-xs w-20 text-center">{user?.displayName}</p>
            </div>
        </div>
      ): 
      (<button className={styles.signUpButton} onClick={signIn}><FcGoogle /> Sign Up With Google</button>)}
    </div>
  )
}

export default Header


