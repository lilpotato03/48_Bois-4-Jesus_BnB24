import React from 'react'
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