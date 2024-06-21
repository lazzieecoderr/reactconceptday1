import React from 'react';

const CompB = ({arr}) => {
    return (
        <div>
            <h1>Component B</h1>
            {arr.map((element,index)=>{
                return(
                  
                   <div key={index}>
                    <h1>{element}</h1>
                   </div>
                  
                )
            })}
        </div>
    );
};

export default CompB;