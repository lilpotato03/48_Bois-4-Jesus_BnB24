import React from 'react'

function Tag(props){
  return (
    <div className='tag hover' onClick={()=>props.onDelete(props.id)}>
      <p>{props.title}</p>
    </div>
  )
}

export default Tag