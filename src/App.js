import React from 'react';
import List from './components/List.js';

const App = props => {
  console.log(props);

  const allCards = props.store.allCards;

  const cardsList = Object.keys(allCards).map((key, value) => {
    return (
      <div>{key}: {value}</div>
    )
  });
  console.log(cardsList);

  const storeLists = props.store.lists.map(list => {
    console.log({ list });

    const cardsNeeded = list.cardIds.map(card => {
      console.log({ card });
    })
  });
}

export default App;
