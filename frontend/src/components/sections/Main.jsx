import React,{useContext} from 'react'
import AppContext from '../../context'
import Display from './Display'
import Analytics from './Analytics'
import Filter from './Filter'

function Main() {
  return (
    <div className='main'>
        <Filter />
        <Display />
        <Analytics />
    </div>
  )
}

export default Main