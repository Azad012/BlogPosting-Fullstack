
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import Navbar from './components/navbar';
import Register from './components/register';
import About from './components/about';
import Contact from './components/contact';
import CreatePost from './components/CreatePost';
import Dashboard from './components/Dashboard';
import Post from './components/post';







function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Navbar/>} />
      <Route index element={<Home /> } />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/CreatePost' element={<CreatePost />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/Dashboard' element={<Dashboard/>} />
      <Route path='/post/:id'  element={<Post/>} />
    

    </Routes>
    </BrowserRouter>

    
   
  );
};

export default App;
