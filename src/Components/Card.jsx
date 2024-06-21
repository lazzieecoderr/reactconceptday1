import React, { useState } from 'react';

const Card = ({setCartCount,ele}) => {
    const [status ,setStatus] = useState(true)

    const cartAdd = () =>{
      setStatus(false);
      setCartCount(preval=>preval+1)
    }
    const cartRemove = () =>{
      setStatus(true);
      setCartCount(preval=>preval-1)
    }
    return (
        <div key={ele.id}>
                      <h1>{ele.name}</h1>
                      <h1>{ele.age}</h1>
                      <h1>{ele.address}</h1>  
                      {status ? <button onClick={cartAdd}>Add to cart</button> : <button onClick={cartRemove}>Remove from Cart</button>}
                    </div>
    );
};

export default Card;