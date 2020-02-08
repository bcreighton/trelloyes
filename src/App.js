import React from 'react';
import List from './components/List.js';
import './App.css';

const App = props => {
  const allLists = props.store.lists;
  const allCards = props.store.allCards;

  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {Object.keys(allLists).map(key => {
          return (
            <List
              key={allLists[key].id}
              header={allLists[key].header}
              cards={allLists[key].cardIds.map(cardId => {
                return allCards[cardId];
              })}
            />
          )
        })};
      </div>
    </main>
  )
}

export default App;
