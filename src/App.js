import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Todo from './pages/Todo';
import Contact from './pages/Contact';
import './App.css';

const Home = () => {
  return (
    <div className='home-page'>
      <h1>Welcome to To-Do-List </h1>
      <p>You can Add or Delete Task by using this app</p>
    </div>
  );
  
};
const App = () =>  {
  
  return (
   <Router>
      <div className='sidebar'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='content-area'>
        <Routes>
          <Route path="/" exact element={ <Home /> } />
          <Route path="/todo" element={ <Todo /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
