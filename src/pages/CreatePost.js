import {useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../firebase';
import axios from 'axios'
import  {useNavigate} from 'react-router-dom';
import {BsFillBackspaceFill} from "react-icons/bs";
const categories = ['photography', 'education', 'sport', 'astronomy', 'web-development']
const styles = {
  title: `text-3xl text-gray-900 focus:outline-none mb-4`,
  textarea: `w-full h-[250px] resize-none focus:outline-none text-xl text-gray-900 `,
  select: `border-none text-xl focus:outline-none text-gray-900 w-[150px] m-auto`,
}

const CreatePost = () => {

  const [user] = useAuthState(auth);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('categoty');

  const navigate = useNavigate()
  const publish = async () => {
    if(title !== '' && subtitle !== '' && text !== '' && image !== ''){
      const response = await axios.post('https://houedd-blog.herokuapp.com/v1/articles', {
        category: category,
        author: user?.displayName,
        photoUrl: user?.photoURL,
        title: title,
        subtitle: subtitle,
        image: image,
        text: text,
        timestamp: new Date(),
      })

      const success = response.status === 201;
      if(success){
        navigate('/')
      }  
    }
  }
  return(
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-2">
      <div className="absolute left-5 top-20 group">
        <button onClick={() => navigate('/')}><BsFillBackspaceFill fontSize={30} /></button>
        <h1 className="text-gray-500 hidden group-hover:block">back to the home page</h1>
      </div>
      <div className="w-[80%] m-auto p-5 flex items-center justify-between">
        <div className="flex items-center justify-start gap-2">
          <div className="text-xl font-bold p-5 px-0 text-blue-500">DevEdd</div>
          <p className="text-sm">Draft in <span className="text-gray-700">{user?.displayName}</span></p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button 
          className="px-3  py-1 bg-green-700 hover:bg-green-600 rounded-full text-white font-bold text-sm"
          onClick={publish}>
            Publish
          </button>
          <img height={40} width={40} className="rounded-full" src={user?.photoURL} alt="" />
        </div>
      </div>

      <form className="w-[60%] m-auto mt-5 p-5 flex flex-col">
      <select className={styles.select} value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(category => (
            <option className="text-gray-900">{category}</option>
          ))}
        </select>

        <input className={styles.title} placeholder="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input className={styles.title} placeholder="subtitle" type="text" value={subtitle} onChange={(e) => {setSubtitle(e.target.value)}}/>
        <input className={styles.title} placeholder="image (url)" type="text" value={image}  onChange={(e) => {setImage(e.target.value)}}/>
        <textarea className={styles.textarea} placeholder="what's in your mind ?" type="text" value={text}  onChange={(e) => {setText(e.target.value)}}></textarea>
      </form>
    </div>
  )
}

export default CreatePost