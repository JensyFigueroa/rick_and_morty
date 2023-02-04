import { useState } from 'react'
import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/navBar/Nav.jsx'

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    
    if (character) {
        fetch(`https://rickandmortyapi.com/api/character/${character}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.name) {
              let finded = characters.find(element => element.id === data.id)
              if (finded === undefined) {
                setCharacters((oldChars) => [...oldChars, data])
              }else{
                window.alert('No hay personajes con ese ID');
              }
            }
          })
        }else{
        alert('Debe introducir un ID valido...')
      }
    }
  

  const onClose = (id) => {
    setCharacters(characters.filter(element => element.id !== id))
  }

  const random = () => {
    let randomId = Math.floor(Math.random() * 826)

    onSearch(randomId)
  }

  return (
    <div className='App' style={{ padding: '0px' }}>
      <Nav onSearch={onSearch} random={random}/>
      <Cards characters={characters} onClose={onClose} />
    </div>
  )
}

export default App
