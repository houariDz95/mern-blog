import Home from "./pages/Home";
import SpecificArticles from './pages/SpecificArticles';
import UserProfile from './pages/UserProfile';
import CreatePost from "./pages/CreatePost";
import PostDetails from './pages/PostDetails';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="h-[100%] bg-gray-200">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specific-articles/:category" element={<SpecificArticles />} />
          <Route path="/user-profile/:id" element={<UserProfile />} />
          <Route path="/edit" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
