//import logo from './logo.png';
import { 
  BrowserRouter as Router,
  
  Switch,
  Route,
  
} from 'react-router-dom';
//import React, { Component } from 'react';
import './App.css';
//import Navbar from './components/Navbar';
//import Home from './components/Home';
 
// import Cart from './components/Cart';
import About from './components/About';
import Navbar from './components/Navbar';
//import Navbar from './components/navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import Details from './components/Details';
import Home from './components/Home';
import Contact from './components/Contact';


function App() {
  return (
  <Router>

    <Navbar />

    <Switch>
        <Route  path = "/" exact> <Home /> </Route>
        <Route  path = "/home" exact> <Home /> </Route>
        <Route  path = "/products" exact> <Products /> </Route>
        <Route  path = "/cart" exact> <Cart /> </Route>
        <Route  path = "/about" exact> <About /> </Route>
        <Route  path = "/details/:id" exact> <Details/> </Route>
        <Route  path = "/contact" exact> <Contact /> </Route>
        

        

         
        
        
           
          
       </Switch>
       
  </Router>
    
    
        
       

      
     
      
      
      
    
  );
}

export default App;

