// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { NewPost } from './components/NewPost';

export function App() {
  return (
    <BrowserRouter>
      <header className="mb-2 p-2 bg-blue-100 flex items-center">
        <h1>Microblog</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/newpost">New Post</Link>
            </li>
            <li>
              <Link to="Login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
