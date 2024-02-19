import React,{useContext,useState} from 'react'
import AppContext,{MyContext} from '../../context'

function SearchBar(props) {
  const {inputText,setInputText,tagList,setSearchQuery}=useContext(MyContext)
    function handleSubmit(event) {
        setInputText(()=>{
          setSearchQuery(()=>{
            return{
              tags:tagList,
              search:inputText
            }
          })
          return('')
        })
        event.preventDefault();
    }
      function handleChange(event) {
        const {value} = event.target;
        setInputText(()=>{
          return value;
        });
      }
      
  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <input type="text" name="" id="" onChange={handleChange} value={inputText} placeholder='Enter....'/>
      <button className='searchButton hover' type='submit'>Search</button>
    </form>
  )
}

export default SearchBar