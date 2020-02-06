import React from 'react';
import Card from './Card.js';

const List = props => {

  const cardsList = props.cards.map(card => {
    return <Card key={card.id} title={card.title} content={card.content} />
  });

  console.log(cardsList);

  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {cardsList}
      </div>
    </section>
  )
}

export default List;