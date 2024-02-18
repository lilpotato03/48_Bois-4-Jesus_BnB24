import React from 'react'

function Card(props) {
  return (
    <div className='cards hover'>
      <p>{props.name}</p>
      <p>{props.location}</p>
      <p>{props.number}</p>
      <ul>
        {(props.skill).map(genSkills)}
      </ul>
    </div>
  )
  function genSkills(text){
    return(
      <li>{text}</li>
    );
  }
}

export default Card