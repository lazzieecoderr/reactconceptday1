import React from 'react';

const ComponentA = ({setValue,value}) => {
   const handleSubmit = (indexpos)=>{
    setValue((preval)=>preval.filter((item,index)=>index !== indexpos ))
   }
const handleAdd = ()=>{
    setValue((preval)=>[...preval,50])  // [1,2,3,4,5]  -> [1,2,3,4,5,50,50,50]
}
    return (
        <div>
            <h1>Component A</h1>
           {value.map((ele,index)=>{
            return(
                <div key={index}>
                    {ele}
                    <button onClick={()=>{handleSubmit(index)}}>Remove</button>
                </div>
            )
           })}
           <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default ComponentA;