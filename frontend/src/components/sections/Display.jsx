import React,{useContext} from 'react'
import AppContext from '../../context'
import SearchBar from '../smaller_components/SearchBar'
import CardRow from '../smaller_components/CardRow'

function Display() {
  return (
    <div className='display'>
      <SearchBar />
      <CardRow />
    </div>
  )
}

export default Display