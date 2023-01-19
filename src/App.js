import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [joke, setJoke] = useState("");
  const [go, setGo] = useState("");

  const getJoke = () => {
      console.log("Hello World");

      fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => {
          setJoke(data.setup + " ... " + data.punchline);
        });
  };

    const getGo = () => {
        fetch("http://localhost:8089/go")
            .then((response) => response.json())
            .then((data) => {
                console.log('Got data!');
                setGo(data.msg);
            });
    };

  return (
    <div className="App">
      <header className="App-header">
        React Hello
        <button onClick={getJoke}>Get Joke</button>
        {joke}
        <button onClick={getGo}>Call Go Hello</button>
        {go}
      </header>
    </div>
  );
}

export default App;
