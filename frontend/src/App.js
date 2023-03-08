import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './App.css'
import NavBar from './components/navBar/NavBar.jsx'
import Cards from './components/cards/Cards.jsx'
import About from './components/about/About.jsx'
import Details from './components/detail/Details.jsx'
import Error from './components/error/Error.jsx'
import Form from './components/form/Form.jsx'
import Favorites from './components/favorites/Favorites.jsx'



function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    
    if (character) {
        // fetch(`https://rickandmortyapi.com/api/character/${character}`)
        //fetch(`http://localhost:3001/rickandmorty/${character}`)
        fetch(`http://localhost:3001/rickandmorty/onSearch/${character}`)
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
  


  
  const dispatch = useDispatch()

  const onClose = (id) => {
    setCharacters(characters.filter(element => element.id !== id))
    dispatch(removeFav(id))
  }

  const random = () => {
    let randomId = Math.floor(Math.random() * 826)

    onSearch(randomId)
  }

  const location = useLocation()


    // Simulando una base de datos de donde traermos los datos del login

    const navigate = useNavigate();
    const [access, setAccess] = useState(false);
    // const username = 'ejemplo@gmail.com';
    // const password = '1password';
    const username = 'j@gmail.com';
    const password = '111111';

    function login(userData) {
        if (userData.password === password && userData.username === username) {
            setAccess(true);
            navigate('/home');
        }
    }

    useEffect(() => {
      !access && navigate('/');
   }, [access]);


   const logOut = () =>{
    setAccess(false)
   }

  return (
    <div className='App' style={{ padding: '0px' }}>

      {location.pathname !== '/' && <NavBar onSearch={onSearch} random={random} logOut={logOut}/>}
      
      <Routes>
        <Route exact path='/' element={<Form login={login}/>}/>
        <Route exact path='/home' element={<Cards  characters={characters} onClose={onClose} />}/>
        <Route exact path='/favorites' element={<Favorites characters={characters}/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/detail/:detailId'  element={<Details/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>      
    </div>
  )
}

export default App
