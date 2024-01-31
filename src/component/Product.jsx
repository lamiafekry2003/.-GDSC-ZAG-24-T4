import React, { useState } from 'react'
import './Card.css'
function Product(props){
   const[pricce,setPrice]=useState("")
   const[counter,setCounter]=useState(0)
   
 return(
    <div className='col-md-4'>
           <div className="item p-3 shadow-lg position-relative">
           <img  className="img-fluid" src={props.prod.image}/>
           <h2 >{props.prod.title}</h2>
           <p>{props.prod.description}</p>
           <div className="btn  bottom-0">
           <h5 className='text-left'>click price:<span className='text-danger'>{pricce}</span></h5>
            <button className='btn btn-success my-2 mx-2 position-absolute bottom-0 start-0' onClick={()=>setPrice(props.prod.price)}>Price</button>
            <h5 style={{color:"red"}}>producted Added :<span className='text-dark'>{counter}</span>-product</h5>
            <button className='btn btn-danger my-2 mx-2 position-absolute bottom-0 end-0' onClick={()=>setCounter(counter+1)}>addProduct</button>
           </div>
           </div>
        </div>
 )
}
export default Product