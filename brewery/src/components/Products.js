import React, { useState } from 'react';
import Product from './Product';
import { Data } from './Data';
import './Product.css';
//import { useSelector } from 'react-redux';
//import axios from "axios"

const Products = (props) => {


    const [state, setState] = useState(Data);




  return (
    <div className= "products">
        <div className = "inside-container">
            <h3>Products</h3>
            

            {state.map(product=> <Product key={product._id} data={product} />)}
            
        </div>

        
    </div>
  )
}

export default Products