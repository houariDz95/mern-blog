import React from 'react';
import { Link } from 'react-router-dom';
import {useStateContext} from '../StateContext'

const Users = () => {
  const {users} = useStateContext();
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg">
      {users.slice(0, 5).map((user) => (
        <Link to={`/user-profile/${user._id}`} key={user?._id}>
        <div  className="flex items-center cursor-pointer">
          <img src={user?.photoUrl}  width={30} height={30} className="rounded-full" alt=""/>
          <div className="flex flex-col ml-2">
            <p className="text-normal text-gray-900">{user?.userName}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>    
  )
}

export default Users