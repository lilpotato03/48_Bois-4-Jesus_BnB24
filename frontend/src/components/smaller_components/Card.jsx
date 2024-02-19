import React from 'react'

function Card(props) {
  return (
    <div className='cards hover'>
      <div className='cards-row1'>
      <p>{props.name}</p>
      <p>{props.location}</p>
      <p>{props.number}</p>
      </div>
      <ul className='cards-row2'>
        {(props.skill).map(genSkills)}
      </ul>
    </div>
  )
  function genSkills(text,index){
    if(index>3===false){
      return(
        <li>{text}</li>
      );
    }
  }
}

export default Card