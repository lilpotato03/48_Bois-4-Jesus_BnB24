import React from 'react'
import { useState } from 'react'
function FilterAdd(props) {
    const [tag,setTag]=useState('')
    function handleSubmit(event) {
        props.onAdd(tag)
        setTag(()=>{
            return('');
        })
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