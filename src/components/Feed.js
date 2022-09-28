import React from 'react'
import Articles from './Articles';
import Users from './Users';
import Categories from "./Categories";
import {  auth } from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
const styles = {
  container: `bg-white h-[250px] mt-5 flex flex-col justify-between p-4 rounded-lg shadow-lg`,
  span: `text-gray-500 hover:text-gray-400`,
}
const Feed = () => {
  const [user] = useAuthState(auth)
  return (
    <div className="w-[70%] m-auto flex">
      <Articles />
    {user && 
      <div className="ml-5 lg:block hidden flex-[0.2]" >
        <div className="fixed">
          <Users />
          <Categories container={styles.container} span={styles.span} title="Categories" />
        </div>
      </div>}
    </div>
  )
}

export default Feed