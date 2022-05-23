import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Sheard/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Blogs from './Pages/Blogs/Blogs';
import SignUp from './Pages/Login/SignUp';
import Reviews from './Pages/Home/Reviews';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/part/:partId' element={<Purchase></Purchase>}></Route>
        <Route path='reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
