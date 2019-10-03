import React from 'react';
import './App.css';
import CocktailListContainer from './components/CocktailListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cocktails!</h1>
      </header>
      <main>
        <CocktailListContainer/>
      </main>
    </div>
  );
}

export default App;
