import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [joke, setJoke] = useState("");
  const [go, setGo] = useState("");
  const [ruby, setRuby] = useState("");
  const [controlSystem, setControlSystem] = useState("");

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

  const getRuby = () => {
    fetch("http://localhost:8091/")
      .then((response) => response.json())
      .then((data) => {
        console.log('Got ruby!');
        setRuby(data.msg);
      });
  };

  const getControlSystem = () => {
    fetch("http://localhost:8089/control-system")
      .then((response) => response.json())
      .then((data) => {
        console.log('Got control system!');
        setControlSystem(data.control_system.name);
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
        <button onClick={getRuby}>Call Ruby Hello</button>
        {ruby}
        <button onClick={getControlSystem}>Get Control System</button>
        {controlSystem}
      </header>
    </div>
  );
}

export default App;
