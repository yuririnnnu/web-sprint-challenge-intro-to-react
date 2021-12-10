import React, { useState, useEffect }from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import Detail from './components/Detail';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [chars, setChars] = useState([]);
  const [curChar, setCurChar] = useState(null);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const openDetail = (id) => {
    setCurChar(id)
  }
  const closeDetail = () => {
    setCurChar(null);
  }

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      console.log(res.data);
      setChars(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  },[])
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        chars.map((char) => {
          return <Character key={char.id} info={char} action={openDetail} />
        })
      }
      {
        curChar && <Detail char={curChar} close={closeDetail}/>
      }
    </div>
  );
}

export default App;
