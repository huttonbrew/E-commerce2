import React from 'react'
import { Link } from 'react-router-dom'
//import { useSelector } from 'react-redux'




const Product = (props) => {
      const {data} = props;
    // const products = useSelector((state) => state.all.products);
    // const renderList = products.map((product) => {
    //     const { id, title, image, price, category } = product
        return (
     <div className= "product" >
        <div className="box-img">
            {/* <img src = {image} alt = {title} /> */}
            <Link to ={`/details/${data.id}`}><img src = {data.imageUrl} alt = "" /></Link>

        </div>

        <div className ="product-details">

            
            <h3>{data.name}</h3>
            <h4> $ {data.price}</h4>
        </div>

        <div className = "product-btn">
            <button>Add to Cart</button>

        </div>
        <div className = "inCart">
            <span>Already in Cart</span>

        </div>
    </div>
        )
    }


    export default Product