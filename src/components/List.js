import React from 'react';
import Card from './Card.js';
import './List.css';

const List = props => {

  const cardsList = props.cards.map(card => {
    return <Card key={card.id} title={card.title} content={card.content} />
  });

  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {cardsList}
        <button type="button" className="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  )
}

export default List;