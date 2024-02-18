import React from 'react'
import FilOptions from '../smaller_components/FilOptions'
import Tag from '../smaller_components/Tag'
import FilterAdd from '../smaller_components/FilterAdd'
import { useState } from 'react'
function Filter() {
  return (
    <div className='filter'>
      <div className="upload hover">
        <h1>UPLOAD</h1>
      </div>
      <FilOptions />
      <FilterAdd />
      <div className='tagCont'> 
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      </div>
     
    </div>
  )
}

export default Filter