import React from 'react'
import { useState } from 'react'
function FilterAdd() {
    const [tag,setTag]=useState('')
    const [tagList,setTagList]= useState([]);
    function handleSubmit(event) {
        const {value}=event.target;
        setTagList((prev)=>{
            return[
                ...prev,      
                value
        ]
        })
        console.log(tagList)
        event.preventDefault();
    }
      function handleChange(event) {
        const {value} = event.target;
        setTag(()=>{
          return value;
        });
      }
    
    return (
        <form onSubmit={handleSubmit} className='addTag'>
            <input type="text" name='tag' value={tag} onChange={handleChange}/>
            <button className='hover' type='submit'>Add</button>
        </form>
    
  )
}


export default FilterAdd