//import React from 'react';
import { Data } from './Data';
import './Cart.css';
import React, { useState } from 'react';


const Cart = () => {

    const [cart, setCart] = useState(Data)


  return (

    <div className = "cart">
        <div className="inside-container">
            {cart.length === 0 ?
            <>
            <h3>Cart is currently empty</h3>
            </>
            :
         <>
            <h3>Cart products</h3>
            <div className = "cart-center">
                <div className ="cart-info">
                {cart.map(cart =>(
                    <div className ="single-cart" key = {cart._id}>
                        <div className = "cart-img">
                            <img src = {cart.imageUrl} alt = "" />
                            </div>

                            <div className = "cart-title sameItem">
                                <h4>{cart.name}</h4>

                            </div>
                            <div className = "counting" >
                                <button>-</button>
                                <span>0</span>
                                <button>+</button>

                            </div>

                            <div className = "price">
                                <h4>$ {cart.price * cart.count}</h4>

                            </div>

                            <div className = "delete-item">
                                <i className = "fas fa-trash"> X </i>

                            </div>
                    </div>

                ))}

                </div>

                <div className = "cart-results">
                    <h3>product details</h3>

                    <h4>shipping: <span className ="free">free </span></h4>
                    <h4>price: <span>$100</span></h4>
                    <h4>Total price: <span>$1234</span></h4>

                </div>

            </div>
            </>


            }



        </div>
    </div>
    

  )
}

export default Cart