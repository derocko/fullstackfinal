import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import CreatePost from './pages/CreatePost'
import Home from './pages/Home.jsx';
import ReadPosts from './pages/ReadPosts.jsx';
import EditPost from './pages/EditPosts.jsx';
import Crewmate from './pages/Crewmate.jsx';

export default function Ind() {
  return(
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />}/>
          <Route path="create" element={<CreatePost/>}/>
          <Route path="read" element={<ReadPosts/>}/>
          <Route path="edit" element={<EditPost/>}/>
          <Route path="crewmate" element={<Crewmate/>}/>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Ind />);