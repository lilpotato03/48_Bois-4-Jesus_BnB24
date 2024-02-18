import React from 'react'
import Card from './Card'
import data from '../../data'
function CardRow() {
  function genCards(card,index){
    console.log(card['mobile no'])
    return (
      <Card 
      name={card.name}
      location={card.location}
      number={card['mobile no']}
      skill={card["skills"]}
      key={index}
      id={index}
      />
    );
  }
  console.log(data)
  return (
    <div className='card-row'>
      {data.map(genCards)}
    </div>
  )
}

export default CardRow