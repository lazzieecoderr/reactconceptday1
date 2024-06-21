import React from 'react';

const CompC = ({arrObj}) => {
    return (
        <div>
            <h1>Component C</h1>
            {arrObj.map((ele,index)=>{
                return(
                    <div key={index}> 
                     {ele.id}
                     {ele.name}
                     {ele.age}
                     {ele.address}
                    </div>
                )
            })}
        </div>
    );
};

export default CompC;