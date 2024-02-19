import React from 'react'
import { useContext, useState } from 'react'
import AppContext,{MyContext} from '../../context'
function FilterAdd(props) {
    const {tag,setTag}=useContext(MyContext)
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
            <input type="text" name='tag' value={tag} placeholder="Add Tags..." onChange={handleChange}/>
            <button className='hover' type='submit'>Add</button>
        </form>
    
  )
}


export default FilterAdd