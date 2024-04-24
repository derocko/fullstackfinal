import './App.css'
//import { useRoutes } from 'react-router-dom'
//import ReadPosts from './pages/ReadPosts'
//import CreatePost from './pages/CreatePost'
//import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div>
      <h1>Table Talk</h1>
      <Link to="/read"><button className="headerBtn">View All Posts</button></Link>
      <Link to="/create"><button className="headerBtn">Create A Post</button></Link>
    </div>
  )
}

export default App
