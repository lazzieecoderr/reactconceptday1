import React, { useState } from 'react';
import Card from '../Card';

const ComponentB = ({setProduct,product,setCartCount,cartCount}) => {
   

    return (    
        <div>
            <h1>Component B</h1>
            {product.map((ele,index)=>{
                return <Card ele={ele} setCartCount={setCartCount} />
            })}
          
        </div>
    );
};

export default ComponentB;