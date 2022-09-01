import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import './App.css';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ContacttUsScreen from './screens/ContactUsScreen';



function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <Link to='/'> Kalakriti</Link>
        
      </div>
      <div className="header-links">
      <Link to='/aboutUs'> About Us</Link>
      <Link to='/contactus'>Contact Us</Link>
        <a href="cart.html">Cart</a>
        {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul className="categories">
        <li>
          <Link to="/category/Tops">Tops</Link>
        </li>

        <li>
        <Link to="/category/Bottoms">Bottoms</Link>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
      <Route path="/products" component={ProductsScreen} />
      <Route path="/shipping" component={ShippingScreen} />
      <Route path="/payment" component={PaymentScreen} />
      <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/aboutUs" component={AboutUsScreen} />
        <Route path="/contactus" component={ContacttUsScreen} /> 
        <Route path="/" exact={true} component={HomeScreen} />
        
        
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>
    
  );
}

export default App;
