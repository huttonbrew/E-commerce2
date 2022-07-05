import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Data } from './Data';
import './Product.css';
import {connect} from 'react-redux';
import { getItems } from '../actions/itemActions';
//import { useSelector } from 'react-redux';
//import axios from "axios"

const Products = (props) => {


    // const [state, setState] = useState(Data);

// useEffect(()=>{
//     props.getItems();
// }, )

//  const {items} = props.item;
//  console.log(items)


  return (
    <div className= "products">
        <div className = "inside-container">
            <h3>Products</h3>
            
            <div className="products-center">
            {Data.map(product=> <Product key={product.id} data={product} />)}
            </div>
            
            
        </div>

        
    </div>
  )
}

// const mapStateToProps = (state) => ({
//     item:state.item
// })
const mapStateToProps = (state) =>({
    item:state.item
})

 export default (Products)
 //connect(mapStateToProps, {getItems})