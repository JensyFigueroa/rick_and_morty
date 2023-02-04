import { useState } from 'react'
import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/navBar/Nav.jsx'
// import characters from './data.js'

function App() {
  const [characters, setCharacters] = useState([
])

  const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 };

  const onSearch = () =>{
   setCharacters([example])
  }
  return (
    <div className='App' style={{ padding: '0px' }}>
      <Nav onSearch={onSearch}/>
      <Cards characters={characters}/>
    </div>
  ) 
}

export default App
