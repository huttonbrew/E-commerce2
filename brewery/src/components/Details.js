//import React, {useEffect } from 'react';
import './Details.css';
import { useParams, Link} from 'react-router-dom';
import { Data } from './Data';
import './Details.css';


//import {getItems, AddToCart} from '../components/actions/itemActions';
//import {connect} from 'react-redux';
//import React, { useEffect } from 'react';





const Details = (props) => {

    


    // useEffect(()=>{
    //     props.getItems();
    // })  


    const {id}=useParams();
     let contentProduct = Data.find(item => item.id===parseInt(id))
    


  return (
    <div className="details">
        <div className=" inside-container">
            <h3>Product details</h3>
            <div>
           
                
            </div>



            

        </div> 
        
    </div>
  )
}

// const mapStateToProps=(state)=>({
//     item:state.item
//   })

  export default Details;
   //connect(mapStateToProps,{getItems,AddToCart})