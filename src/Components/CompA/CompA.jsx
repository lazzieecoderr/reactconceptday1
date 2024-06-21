import React from 'react';

const CompA = ({a}) => {
   const handleSubmit = ()=>{
    a=a+1;
    console.log(a);
   }
    return (
        <div>
            <h1>Comp A</h1>
            <h1>The value of a {a}</h1>
            <button onClick={handleSubmit}>Click</button>
        </div>
    );
};

export default CompA;