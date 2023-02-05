import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import About from './components/about/About.jsx'
import Cards from './components/cards/Cards.jsx'
import NavBar from './components/navBar/NavBar.jsx'

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
      <NavBar onSearch={onSearch} random={random}/>
      <Routes>
        <Route path='/' element={<Cards  characters={characters} onClose={onClose} />}/>
        <Route path='/home' element={<Cards  characters={characters} onClose={onClose} />}/>
        <Route path='/about' element={<About/>}/>
      </Routes>      
    </div>
  )
}

export default App
