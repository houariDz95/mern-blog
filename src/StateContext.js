import  { createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';
const Context = createContext();

export const StateContext = ({children})  => {
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([])

  useEffect(() => {
   const fetchData = async () => {
    const response = await axios.get('https://houedd-blog.herokuapp.com/v1/articles');
     setArticles(response.data)
   }
   fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://houedd-blog.herokuapp.com/v1/users');
      setUsers(response.data)
    } 
    fetchData()
  }, [])

  return (
    <Context.Provider value={{articles, users}}>
        {children}
    </Context.Provider>  )
}

export const useStateContext = () => useContext(Context);