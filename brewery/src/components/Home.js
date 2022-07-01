import React from 'react';
import Products from './Products';
import image4 from '../images/image4.jpg'
import './Home.css';

const Home = () => {
  return (

    <React.Fragment>
       <div className="home" style={{backgroundImage:`url(${image4})`}}> 
           

           <div className = "banner">
               <h1>Welcome to the Brewery</h1>

           </div>
       </div>

       <Products />
    </React.Fragment>
    
    
  );
}

export default  Home;