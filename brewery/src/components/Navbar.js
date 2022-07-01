import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';





const Navbar = () => {


    return (
        
        
         <div className ="navbar">
            <nav className="nav">
                <div className="logoBtn"> 
                <Link to = '/'><img src = {logo} alt ="logo" /> 
                <p><span>BREWERY</span></p>
                </Link>
                

                <Link to = '/cart'>
                <div className='shopping-icon mobile-shopping'>
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
                
                    
                    <span>0</span>
                    </div>
                    
                 </Link> 

                
                 </div>

                 <div className ="links">
                    <div className = "links-navigation">
                        {/* <div className = "nav-btn">
                            <span>X</span>
                        </div> */}
                     <ul className="links-nav">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/donate">Donate</Link></li>
                        <li><Link to="/sale">Sale</Link></li>
                        <li><Link to="/sponser">Sponser</Link></li>
                        <li><Link to="/new release">New Release</Link></li>

                        
                        </ul>
                        
                    
                     
                    </div> 
                 </div> 
                
                 
                  
              </nav>        
         </div>
    );
}


export default Navbar;
