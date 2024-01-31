import React, { useState ,useEffect} from 'react'
import ProductsData from '../products'
import Product from './Product'
import './ProductsList.css';

function ProductsList() {
  return(
    <div className='container'>
        <div className='row gy-4'>
            {/* {product} */}
            {ProductsData.map((prod)=>prod.price>100?(<Product  key={prod.id} prod={prod} />):"")}
        </div>
    </div>
)
  
}
export default ProductsList