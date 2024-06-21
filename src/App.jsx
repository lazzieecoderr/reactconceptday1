import React, { useState } from "react";
import CompA from "./Components/CompA/CompA";
import CompB from "./Components/CompB/CompB";
import CompC from "./Components/CompC/CompC";
import ComponentA from "./Components/StateComp/ComponentA";
import ComponentB from "./Components/StateComp/ComponentB";


const App = () => {
 const [status , setStatus] = useState(true)
 const [cartCount , setCartCount] = useState(0)
  let a = 10;
  let arr = [1, 2, 3, 4, 5];
  let arrObj = [{
    id:1,
    name: "Rajeeb",
    age: 20,
    address: "Kathmandu",
  },{
    id:2,
    name: "Chakraborty",
    age: 20,
    address: "Kathmandu",
  },{
    id:3,
    name: "Raju",
    age: 20,
    address: "Kathmandu",
  }]
  //javascript part
const [product,setProduct] = useState(arrObj)
  return (
    //jsx part
    <div>
      <h1>App Component</h1>
      <h1>the cart count is {cartCount}</h1>
      {/* using props */}
      {/* <h1>The value of a is {a}</h1>
      <CompA a={a} /> */}
      {/* <CompB arr={arr} /> */}
      {/* <CompC  arrObj = {arrObj} /> */}
      {/* using state */}
      {/* <h1>The value of state Comp is {value}</h1> */}
      {/* <ComponentA  setValue={setValue} value = {value}/> */}
      {status ? <ComponentB  setProduct={setProduct} product = {product} setCartCount={setCartCount} cartCount={cartCount} /> : ''}
    </div>
  );
};

export default App;
