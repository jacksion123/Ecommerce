
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';


import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Shopper from './pages/Shopper';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element = {<Shopper banner={men_banner} category = "men"/>}/> 
      <Route path='/womens' element = {<Shopper banner={women_banner} category="women"/>}/> 
      <Route path='/kids' element = {<Shopper banner={kid_banner} category="kid"/>}/> 

       
        <Route path='/product' element= {<Product/>}>
        <Route path=':productId' element={<Product/>}/>
       </Route>
        <Route path='/cart' element= {<Cart/>}/>
        <Route path='/login' element= {<Login/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
