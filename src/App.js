import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => {
          setJoke(data.setup + " ... " + data.punchline);
        });
  };

  return (
    <div className="App">
      <header className="App-header">
        React Hello
        <button onClick={getJoke}>Get Joke</button>
        {joke}
      </header>
    </div>
  );
}

export default App;
