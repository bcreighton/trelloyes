import React from 'react';
import List from '../components/List.js';

const App = props => {
  const storeLists = props.lists.map(list => {
    <List key={list.id} header={list.header} cards={list.cardIds} />
  });
}

export default App;
